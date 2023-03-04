# Assertion `ctx->frame == NULL' failed at src/mjs_json.c:406: void frozen_cb(void *, const char *, size_t, const char *, const struct json_token *)

## project address

https://github.com/cesanta/mjs

## info

OS：Ubuntu20.04 TLS

Build: `$(DOCKER_CLANG) -fsanitize=address $(CFLAGS) $(TOP_MJS_SOURCES) $(TOP_COMMON_SOURCES) -o $(PROG)`

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mjs/Assertion/mjs_json/poc3.zip

## ASAN Info

```c
./mjs poc3.js

mjs: src/mjs_json.c:406: void frozen_cb(void *, const char *, size_t, const char *, const struct json_token *): Assertion `ctx->frame == NULL' failed.
[1]    3603939 abort      ./mjs poc3.js

```
