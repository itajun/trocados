package au.ivj.trocados.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.concurrent.TimeUnit;

@Configuration
public class SecurityConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                applyFullCorsAllowedPolicy(registry);
            }
        };
    }

    public static void applyFullCorsAllowedPolicy(CorsRegistry registry) {
        registry.addMapping("/**") //
                .allowedOrigins("*") //
                .allowedMethods("OPTIONS", "HEAD", "GET", "PUT", "POST", "DELETE", "PATCH") //
                .allowedHeaders("*") //
                .exposedHeaders("WWW-Authenticate") //
                .allowCredentials(true)
                .maxAge(TimeUnit.DAYS.toSeconds(1));
    }
}
