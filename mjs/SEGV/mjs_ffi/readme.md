# SEGV src/mjs_ffi.c:456 in ffi_cb_impl_wpwwwww

## project address

https://github.com/cesanta/mjs

## info

OS：Ubuntu20.04 TLS

Build: `$(DOCKER_CLANG) -fsanitize=address $(CFLAGS) $(TOP_MJS_SOURCES) $(TOP_COMMON_SOURCES) -o $(PROG)`

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mjs/SEGV/mjs_ffi/poc4.zip

## ASAN Info

```c

./mjs poc4.js

AddressSanitizer:DEADLYSIGNAL
=================================================================
==255247==ERROR: AddressSanitizer: SEGV on unknown address 0x0000004dfe3e (pc 0x0000004dfeb6 bp 0x7fffffffe070 sp 0x7fffffffdbd0 T0)
==255247==The signal is caused by a WRITE memory access.
    #0 0x4dfeb6 in ffi_cb_impl_wpwwwww /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_ffi.c:456
    #1 0x4d81f1 in mjs_exec_internal /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_exec.c:1073:5
    #2 0x4d88e3 in mjs_exec_file /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_exec.c:1096:11
    #3 0x4e8435 in main /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_main.c:47:11
    #4 0x7ffff7c4f082 in __libc_start_main /build/glibc-SzIz7B/glibc-2.31/csu/../csu/libc-start.c:308:16
    #5 0x41c42d in _start (/home/ubuntu/asan_fuzz_mjs/mjs/build/mjs+0x41c42d)

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: SEGV /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_ffi.c:456 in ffi_cb_impl_wpwwwww
==255247==ABORTING
```
