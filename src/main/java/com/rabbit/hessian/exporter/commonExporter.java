package com.rabbit.hessian.exporter;

import com.rabbit.service.ClientService;
import com.rabbit.service.SysDictValueService;
import com.rabbit.service.TTestDatabeseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.caucho.HessianServiceExporter;

@Configuration
public class commonExporter {
    @Autowired
    private ClientService clientService;

    @Autowired
    private TTestDatabeseService testDatabeseService;

    @Autowired
    private SysDictValueService sysDictValueService;

    @Bean(name = "/hessian/sysDictValueService")
    public HessianServiceExporter sysDictValueService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(sysDictValueService);
        exporter.setServiceInterface(SysDictValueService.class);
        return exporter;
    }

    @Bean(name = "/hessian/clientService")
    public HessianServiceExporter accountService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(clientService);
        exporter.setServiceInterface(ClientService.class);
        return exporter;
    }

    @Bean(name = "/hessian/testDatabeseService")
    public HessianServiceExporter testDatabeseService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(testDatabeseService);
        exporter.setServiceInterface(TTestDatabeseService.class);
        return exporter;
    }
}
