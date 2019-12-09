package com.rabbit.dao;

import com.rabbit.model.UserTest;

import java.util.List;

public interface UserTestMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserTest record);

    int insertSelective(UserTest record);

    UserTest selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserTest record);

    int updateByPrimaryKey(UserTest record);

    List<UserTest> selectAll();
}