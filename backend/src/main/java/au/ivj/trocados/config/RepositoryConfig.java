package au.ivj.trocados.config;

import au.ivj.trocados.entities.Category;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Category.class);
        config.setReturnBodyForPutAndPost(false);
        config.setReturnBodyOnUpdate(false);
        config.setMaxPageSize(250);
        config.setDefaultPageSize(50);
        config.useHalAsDefaultJsonMediaType(true);

        SecurityConfig.applyFullCorsAllowedPolicy(config.getCorsRegistry());
    }
}