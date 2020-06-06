package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.dao.TStepUiNewMapper;
import com.rabbit.dao.TSuiteCaseUiMapper;
import com.rabbit.dao.TTestcaseUiNewDtoMapper;
import com.rabbit.dto.TestcaseUiNewDto;
import com.rabbit.model.TStepUiNew;
import com.rabbit.model.TSuiteCaseUi;
import com.rabbit.service.TFileInfoService;
import com.rabbit.service.TStepUiNewService;
import com.rabbit.utils.UserUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.dao.TTestcaseUiNewMapper;
import com.rabbit.model.TTestcaseUiNew;
import com.rabbit.service.TTestcaseUiNewService;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
public class TTestcaseUiNewServiceImpl implements TTestcaseUiNewService {

    @Resource
    private TTestcaseUiNewMapper tTestcaseUiNewMapper;

    @Autowired
    private TTestcaseUiNewDtoMapper testcaseUiNewDtoMapper;
    @Autowired
    private TStepUiNewService stepUiNewService;

    @Autowired
    private TStepUiNewMapper stepUiNewMapper;
    @Autowired
    private TTestcaseUiNewDtoMapper tTestcaseUiNewDtoMapper;
    @Autowired
    private TSuiteCaseUiMapper tSuiteCaseUiMapper;

    @Autowired
    private TFileInfoService fileInfoService;

    @Override
    @Transactional
    public int deleteByPrimaryKey(Long id) {
        fileInfoService.deleteBySourceTypeAndSourceId(1, id);
        stepUiNewMapper.deleteByTestcaseId(id);
        tSuiteCaseUiMapper.deleteByCaseId(id);
        return tTestcaseUiNewMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TTestcaseUiNew record) {
        return tTestcaseUiNewMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestcaseUiNew record) {
        return tTestcaseUiNewMapper.insertSelective(record);
    }

    @Override
    public TTestcaseUiNew selectByPrimaryKey(Long id) {
        return tTestcaseUiNewMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestcaseUiNew record) {
        return tTestcaseUiNewMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestcaseUiNew record) {
        return tTestcaseUiNewMapper.updateByPrimaryKey(record);
    }

    @Override
    public PageInfo<TTestcaseUiNew> findByAllwithPage(int page, int pageSize, TTestcaseUiNew tTestcaseUiNew) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestcaseUiNewMapper.findByAll(tTestcaseUiNew));
    }

    @Override
    public List<TTestcaseUiNew> findByNameAndProjectId(String name, Long projectId) {
        return tTestcaseUiNewMapper.findByNameAndProjectId(name, projectId);
    }

    @Override
    public List<TTestcaseUiNew> findByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId) {
        return tTestcaseUiNewMapper.findByNameAndProjectIdAndIdNot(name, projectId, notId);
    }

    @Override
    public TestcaseUiNewDto selectDtoByPrimaryKey(Long id) {
        return testcaseUiNewDtoMapper.selectDtoByPrimaryKey(id);
    }

    @Override
    @Transactional
    public TTestcaseUiNew add(TestcaseUiNewDto testcaseUiNewDto) {
        List<TTestcaseUiNew> byNameAndProjectId = tTestcaseUiNewMapper.findByNameAndProjectId(testcaseUiNewDto.getName(), testcaseUiNewDto.getProjectId());
        if (byNameAndProjectId.size() > 0) {
            throw new IllegalArgumentException("用例【" + testcaseUiNewDto.getName() + "】已存在");
        }
        testcaseUiNewDto.setUpdateBy(UserUtil.getLoginUser().getNickname());
        testcaseUiNewDto.setCreateBy(UserUtil.getLoginUser().getNickname());
        tTestcaseUiNewMapper.insertSelective(testcaseUiNewDto);
        List<TStepUiNew> testSteps = testcaseUiNewDto.getTestSteps();
        for (TStepUiNew tStepUiNew : testSteps) {
            tStepUiNew.setId(null);
            tStepUiNew.setTestcaseId(testcaseUiNewDto.getId());
        }
        String s = stepUiNewService.savaStep(testSteps);
        return testcaseUiNewDto;
    }

    @Override
    @Transactional
    public TTestcaseUiNew edit(TestcaseUiNewDto testcaseUiNewDto) {
        TTestcaseUiNew tTestcaseUiNew = tTestcaseUiNewMapper.selectByPrimaryKey(testcaseUiNewDto.getId());
        List<TTestcaseUiNew> byNameAndProjectIdAndIdNot = tTestcaseUiNewMapper.findByNameAndProjectIdAndIdNot(testcaseUiNewDto.getName(), testcaseUiNewDto.getProjectId(), testcaseUiNewDto.getId());
        if (byNameAndProjectIdAndIdNot.size() > 0) {
            throw new IllegalArgumentException("用例【" + testcaseUiNewDto.getName() + "】已存在");
        }
        if (tTestcaseUiNew == null) {
            throw new IllegalArgumentException("用例【" + testcaseUiNewDto.getName() + "】已经不存在");
        } else {
            if (tTestcaseUiNew.getCaseType() == 1 && testcaseUiNewDto.getCaseType() == 2) {
                List<TSuiteCaseUi> byCaseId = tSuiteCaseUiMapper.findByCaseId(tTestcaseUiNew.getId());
                if (byCaseId != null && byCaseId.size() > 0) {
                    throw new IllegalArgumentException("用例【" + testcaseUiNewDto.getName() + "】已经被用例集引用，不能转业务");
                }
            }
        }
        List<TStepUiNew> testSteps = testcaseUiNewDto.getTestSteps();
        if (testSteps != null && testcaseUiNewDto.getCaseType() == 2) {
            TStepUiNew uiAction12 = testSteps.stream().filter(item -> item.getActionType().equals("uiAction12")).findFirst().orElse(null);
            if (uiAction12 != null) {
                throw new IllegalArgumentException("业务步骤中不能使用业务关键字，请检查");
            }
        }
        testcaseUiNewDto.setUpdateBy(UserUtil.getLoginUser().getNickname());
        tTestcaseUiNewMapper.updateByPrimaryKey(testcaseUiNewDto);
        stepUiNewService.savaStep(testSteps);
        return testcaseUiNewDto;
    }

    @Override
    public List<TestcaseUiNewDto> selectDtoBySuiteId(Long id) {
        return tTestcaseUiNewDtoMapper.selectDtoBySuiteId(id);
    }

    @Override
    public Long countBySuiteId(Long suiteId) {
        return tSuiteCaseUiMapper.countBySuiteId(suiteId);
    }

    @Override
    public TestcaseUiNewDto selectByDtoByPrimaryKeyAndCaseType(Long id, Integer caseType) {
        return tTestcaseUiNewDtoMapper.selectByDtoByPrimaryKeyAndCaseType(id, caseType);
    }

    @Override
    public List<TTestcaseUiNew> findByCaseTypeAndProjectId(Long caseType, Long projectId) {
        return tTestcaseUiNewMapper.findByCaseTypeAndProjectId(caseType, projectId);
    }
}








