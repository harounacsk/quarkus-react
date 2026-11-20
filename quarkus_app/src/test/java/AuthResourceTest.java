import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.notNullValue;

@QuarkusTest
public class AuthResourceTest {
    @Test
    public void testLogin(){
        String payload = """
            {
                "email": "harouna@cissokho.com",
                "password": "test_user"
            }
            """;
        given()
                .contentType(ContentType.JSON)
                .body(payload)
                .when()
                    .post("/auth/login")
                .then()
                    .statusCode(200)
                    .body("token", notNullValue());

    }
}
