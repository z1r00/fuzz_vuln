# Heap-buffer-overflow mjs/src/mjs_exec.c:559:40 in mjs_execute

## project address

https://github.com/cesanta/mjs

## info

OS：Ubuntu20.04 TLS

Build: `$(DOCKER_CLANG) -fsanitize=address $(CFLAGS) $(TOP_MJS_SOURCES) $(TOP_COMMON_SOURCES) -o $(PROG)`

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mjs/Heap-buffer-overflow/mjs_exec.c_559_40_in_mjs_execute/poc1.zip

## ASAN Info

```c
./mjs poc.js

<object> x
=================================================================
==219857==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x608000000078 at pc 0x0000004d7353 bp 0x7fffffffd750 sp 0x7fffffffd748
READ of size 8 at 0x608000000078 thread T0
    #0 0x4d7352 in mjs_execute /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_exec.c:559:40

0x608000000078 is located 4 bytes to the right of 84-byte region [0x608000000020,0x608000000074)
allocated by thread T0 here:
    #0 0x494e89 in realloc (/home/ubuntu/asan_fuzz_mjs/mjs/build/mjs+0x494e89)
    #1 0x504619 in mbuf_insert /home/ubuntu/asan_fuzz_mjs/mjs/src/common/mbuf.c:90:18

SUMMARY: AddressSanitizer: heap-buffer-overflow /home/ubuntu/asan_fuzz_mjs/mjs/src/mjs_exec.c:559:40 in mjs_execute
Shadow bytes around the buggy address:
  0x0c107fff7fb0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c107fff7fc0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c107fff7fd0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c107fff7fe0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c107fff7ff0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
=>0x0c107fff8000: fa fa fa fa 00 00 00 00 00 00 00 00 00 00 04[fa]
  0x0c107fff8010: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c107fff8020: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c107fff8030: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c107fff8040: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c107fff8050: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
Shadow byte legend (one shadow byte represents 8 application bytes):
  Addressable:           00
  Partially addressable: 01 02 03 04 05 06 07
  Heap left redzone:       fa
  Freed heap region:       fd
  Stack left redzone:      f1
  Stack mid redzone:       f2
  Stack right redzone:     f3
  Stack after return:      f5
  Stack use after scope:   f8
  Global redzone:          f9
  Global init order:       f6
  Poisoned by user:        f7
  Container overflow:      fc
  Array cookie:            ac
  Intra object redzone:    bb
  ASan internal:           fe
  Left alloca redzone:     ca
  Right alloca redzone:    cb
  Shadow gap:              cc
==219857==ABORTING
```
