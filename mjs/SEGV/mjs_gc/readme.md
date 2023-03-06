# SEGV src/mjs_gc.c:190:11 in gc_sweep

## project address

https://github.com/cesanta/mjs

## info

OS：Ubuntu20.04 TLS

Build: `$(DOCKER_CLANG) -fsanitize=address $(CFLAGS) $(TOP_MJS_SOURCES) $(TOP_COMMON_SOURCES) -o $(PROG)`

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mjs/SEGV/mjs_gc/poc6.zip

## ASAN Info

```c

./mjs poc6.js

AddressSanitizer:DEADLYSIGNAL
=================================================================
==2926144==ERROR: AddressSanitizer: SEGV on unknown address 0x7fff89960675 (pc 0x0000004e2647 bp 0x7fffffffe030 sp 0x7fffffffdb98 T0)
==2926144==The signal is caused by a READ memory access.
    #0 0x4e2647 in gc_sweep /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_gc.c:190:11

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: SEGV /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_gc.c:190:11 in gc_sweep
==2926144==ABORTING
```
