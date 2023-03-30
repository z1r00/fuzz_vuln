#  stack-buffer-overflow yasm/yasm+0x43b466 in vsprintf

## project address

https://github.com/yasm/yasm

## info

OS：Ubuntu20.04 TLS

Build: ./autogen.sh && make distclean && CC=gcc CXX=g++ CFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" CXXFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" ./configure --prefix=$PWD/build --disable-shared && make -j && make install

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/yasm/stack-buffer-overflow/yasm/id:000055%2Csig:06%2Csrc:008089%2B007532%2Cop:splice%2Crep:128

## ASAN Info

```c

./yasm id:000055,sig:06,src:008089+007532,op:splice,rep:128

yasm: file name already has no extension: output will be in `yasm.out'
=================================================================
==1107138==ERROR: AddressSanitizer: stack-buffer-overflow on address 0x7fffb43ff890 at pc 0x00000043b467 bp 0x7fffb43ff760 sp 0x7fffb43feef8
WRITE of size 21 at 0x7fffb43ff890 thread T0
    #0 0x43b466 in vsprintf (/home/z1r0/fuzzing/yasm/yasm/yasm+0x43b466)
    #1 0x43c3f3 in sprintf (/home/z1r0/fuzzing/yasm/yasm/yasm+0x43c3f3)
    #2 0x54e503 in x86_dir_cpu /home/z1r0/fuzzing/yasm/yasm/modules/arch/x86/x86arch.c:169:17
    #3 0x539e14 in yasm_object_directive /home/z1r0/fuzzing/yasm/yasm/libyasm/section.c:377:5
    #4 0x57bfe2 in nasm_parser_directive /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1569:10
    #5 0x579361 in parse_line /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:377:17
    #6 0x579361 in nasm_parser_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:231:18
    #7 0x577618 in nasm_do_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parser.c:66:5
    #8 0x577618 in nasm_parser_do_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parser.c:83:5
    #9 0x4c6eae in do_assemble /home/z1r0/fuzzing/yasm/yasm/frontends/yasm/yasm.c:521:5
    #10 0x4c6eae in main /home/z1r0/fuzzing/yasm/yasm/frontends/yasm/yasm.c:753:12
    #11 0x7f833dc86082 in __libc_start_main /build/glibc-SzIz7B/glibc-2.31/csu/../csu/libc-start.c:308:16
    #12 0x41c47d in _start (/home/z1r0/fuzzing/yasm/yasm/yasm+0x41c47d)

Address 0x7fffb43ff890 is located in stack of thread T0 at offset 48 in frame
    #0 0x54e38f in x86_dir_cpu /home/z1r0/fuzzing/yasm/yasm/modules/arch/x86/x86arch.c:153

  This frame has 1 object(s):
    [32, 48) 'strcpu' (line 168) <== Memory access at offset 48 overflows this variable
HINT: this may be a false positive if your program uses some custom stack unwind mechanism, swapcontext or vfork
      (longjmp and C++ exceptions *are* supported)
SUMMARY: AddressSanitizer: stack-buffer-overflow (/home/z1r0/fuzzing/yasm/yasm/yasm+0x43b466) in vsprintf
Shadow bytes around the buggy address:
  0x100076877ec0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x100076877ed0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x100076877ee0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x100076877ef0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x100076877f00: 00 00 00 00 00 00 00 00 00 00 00 00 f1 f1 f1 f1
=>0x100076877f10: 00 00[f3]f3 00 00 00 00 00 00 00 00 00 00 00 00
  0x100076877f20: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x100076877f30: f1 f1 f1 f1 f8 f3 f3 f3 00 00 00 00 00 00 00 00
  0x100076877f40: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x100076877f50: 00 00 00 00 f1 f1 f1 f1 00 00 f2 f2 f8 f8 f2 f2
  0x100076877f60: f8 f3 f3 f3 00 00 00 00 00 00 00 00 00 00 00 00
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
==1107138==ABORTING

```


