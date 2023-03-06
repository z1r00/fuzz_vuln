# SEGV src/mjs_ffi.c:982:24 in mjs_ffi_cb_free

## project address

https://github.com/cesanta/mjs

## info

OS：Ubuntu20.04 TLS

Build: `$(DOCKER_CLANG) -fsanitize=address $(CFLAGS) $(TOP_MJS_SOURCES) $(TOP_COMMON_SOURCES) -o $(PROG)`

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mjs/SEGV/mjs_fii2/poc5.zip

## ASAN Info

```c

./mjs poc5.js

AddressSanitizer:DEADLYSIGNAL
=================================================================
==2363695==ERROR: AddressSanitizer: SEGV on unknown address 0xffffffffb91bf8b8 (pc 0x0000004dfc5e bp 0x7fffffffe070 sp 0x7fffffffdbd8 T0)
==2363695==The signal is caused by a READ memory access.
    #0 0x4dfc5e in mjs_ffi_cb_free /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_ffi.c:982:24
    #1 0x60400000000f  (<unknown module>)

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: SEGV /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_ffi.c:982:24 in mjs_ffi_cb_free
==2363695==ABORTING
```
