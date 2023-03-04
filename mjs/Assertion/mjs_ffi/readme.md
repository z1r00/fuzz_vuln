# Assertion `userdata_idx > 0' failed at src/mjs_ffi.c:560: ffi_fn_t *get_cb_impl_by_signature(const mjs_ffi_sig_t *)

## project address

https://github.com/cesanta/mjs

## info

OS：Ubuntu20.04 TLS

Build: `$(DOCKER_CLANG) -fsanitize=address $(CFLAGS) $(TOP_MJS_SOURCES) $(TOP_COMMON_SOURCES) -o $(PROG)`

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mjs/Assertion/mjs_ffi/poc2.zip

## ASAN Info

```c
./mjs poc2.js

mjs: src/mjs_ffi.c:560: ffi_fn_t *get_cb_impl_by_signature(const mjs_ffi_sig_t *): Assertion `userdata_idx > 0' failed.
[1]    539949 abort      ./mjs poc2.js
```
