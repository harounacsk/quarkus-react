# Step 1 : Compilation with Maven and Java 25
FROM maven:3.9-eclipse-temurin-25 AS build
WORKDIR /app
COPY pom.xml .
# Download dependencies 
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Step 2 : runtime image with Java 25
FROM eclipse-temurin:25-jre
WORKDIR /app
# Copy Quarkus fast-jar artifacts (fast-jar)
COPY --from=build /app/target/quarkus-app/lib/ /app/lib/
COPY --from=build /app/target/quarkus-app/*.jar /app/
COPY --from=build /app/target/quarkus-app/app/ /app/app/
COPY --from=build /app/target/quarkus-app/quarkus/ /app/quarkus/

EXPOSE 8383
ENTRYPOINT ["java", "-jar", "/app/quarkus-run.jar"]
