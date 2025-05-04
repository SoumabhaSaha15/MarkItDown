
JWT_EXPIRATION = "1h" # 1 hour expiration
JWT_REFRESH     = "1d" # 1 day expiration
JWT_REFRESH_EXPIRATION = "1d" # 1 day expiration
JWT_ISSUER = "your_jwt_issuer"
JWT_AUDIENCE = "your_jwt_audience"
REDIS_HOST = "localhost"
REDIS_PORT = 6379
REDIS_PASSWORD = "your_redis_password"
REDIS_DB = 0
REDIS_URL = f"redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_DB}"
REDIS_URL_WITH_PASSWORD = f"redis://{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}/{REDIS_DB}"
REDIS_URL_WITHOUT_PASSWORD = f"redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_DB}"
