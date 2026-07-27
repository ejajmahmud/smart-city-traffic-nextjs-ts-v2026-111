# Enterprise Docker Container for smart-city-traffic-nextjs-ts-v2026-111
FROM alpine:3.19
RUN apk add --no-cache bash curl ca-certificates
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["echo", "Container active for smart-city-traffic-nextjs-ts-v2026-111 (TypeScript / Next.js React App)"]
