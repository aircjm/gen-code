package com.gitee.gen;


import cn.hutool.core.util.StrUtil;
import java.net.InetAddress;
import java.net.UnknownHostException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.context.WebServerInitializedEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.Async;

@Configuration
public class LaunchEventListener {
    private static final Logger log = LoggerFactory.getLogger(LaunchEventListener.class);

    public LaunchEventListener() {
    }

    @Async
    @Order
    @EventListener({WebServerInitializedEvent.class})
    public void afterStart(WebServerInitializedEvent event) {
        Environment env = event.getApplicationContext().getEnvironment();
        int port = event.getWebServer().getPort();
        String protocol = "http";
        if (env.getProperty("server.ssl.key-store") != null) {
            protocol = "https";
        }

        String contextPath = env.getProperty("server.servlet.context-path");
        if (StrUtil.isBlank(contextPath)) {
            contextPath = "/";
        }

        String externalHost = "localhost";

        try {
            externalHost = InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException var8) {
            log.warn("获取外部(局域网/公网)IP失败");
        }

        System.out.println(StrUtil.format("\n----------------------------------------------------------\n\tApplication '{}' is running! Access URLs:\n\tSwagger : \t\t{}://127.0.0.1:{}{}doc.html\n\tLocal: \t\t{}://127.0.0.1:{}{}\n\tExternal: \t{}://{}:{}{}\n----------------------------------------------------------\n", new Object[]{env.getProperty("spring.application.name"), protocol, port, contextPath, protocol, port, contextPath, protocol, externalHost, port, contextPath}));
    }
}
