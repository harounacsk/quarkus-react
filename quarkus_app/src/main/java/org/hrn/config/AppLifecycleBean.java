package org.hrn.config;

import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.transaction.Transactional;
import org.hrn.entity.User;
import org.mindrot.jbcrypt.BCrypt;

@ApplicationScoped
public class AppLifecycleBean {
    @Transactional
    void onStart(@Observes StartupEvent ev){
        if(User.count() == 0){
            String email="harouna@cissokho.com";
            String password="test_user";
            User user = new User();
            user.email = email;
            user.password = BCrypt.hashpw(password,BCrypt.gensalt());
            user.role = "USER";
            user.persist();
        }

    }
}
