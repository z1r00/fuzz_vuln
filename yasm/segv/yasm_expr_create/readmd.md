#  SEGV yasm/libyasm/expr.c:87:44 in yasm_expr_create

## project address

https://github.com/yasm/yasm

## info

OS：Ubuntu20.04 TLS

Build: ./autogen.sh && make distclean && CC=gcc CXX=g++ CFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" CXXFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" ./configure --prefix=$PWD/build --disable-shared && make -j && make install

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/yasm/segv/yasm_expr_create/id:000051%2Csig:06%2Csrc:008025%2Cop:havoc%2Crep:32

## ASAN Info

```c

./yasm id:000051,sig:06,src:008025,op:havoc,rep:32

yasm: file name already has no extension: output will be in `yasm.out'
AddressSanitizer:DEADLYSIGNAL
=================================================================
==3310123==ERROR: AddressSanitizer: SEGV on unknown address 0x000000000000 (pc 0x00000060db46 bp 0x7ffd285ed390 sp 0x7ffd285ed320 T0)
==3310123==The signal is caused by a READ memory access.
==3310123==Hint: address points to the zero page.
    #0 0x60db46 in yasm_expr_create /home/z1r0/fuzzing/yasm/yasm/libyasm/expr.c:87:44
    #1 0x57c34f in nasm_parser_directive /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1597:17
    #2 0x579361 in parse_line /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:377:17
    #3 0x579361 in nasm_parser_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:231:18
    #4 0x577618 in nasm_do_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parser.c:66:5
    #5 0x577618 in nasm_parser_do_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parser.c:83:5
    #6 0x4c6eae in do_assemble /home/z1r0/fuzzing/yasm/yasm/frontends/yasm/yasm.c:521:5
    #7 0x4c6eae in main /home/z1r0/fuzzing/yasm/yasm/frontends/yasm/yasm.c:753:12
    #8 0x7f764ee43082 in __libc_start_main /build/glibc-SzIz7B/glibc-2.31/csu/../csu/libc-start.c:308:16
    #9 0x41c47d in _start (/home/z1r0/fuzzing/yasm/yasm/yasm+0x41c47d)

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: SEGV /home/z1r0/fuzzing/yasm/yasm/libyasm/expr.c:87:44 in yasm_expr_create
==3310123==ABORTING

```



