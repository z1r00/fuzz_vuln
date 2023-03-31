#  SEGV yasm/modules/preprocs/nasm/nasm-pp.c in delete_Token

## project address

https://github.com/yasm/yasm

## info

OS：Ubuntu20.04 TLS

Build: ./autogen.sh && make distclean && CC=gcc CXX=g++ CFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" CXXFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" ./configure --prefix=$PWD/build --disable-shared && make -j && make install

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/yasm/segv/delete_Token/id:000176%2Csig:06%2Csrc:008442%2B007750%2Cop:splice%2Crep:128

## ASAN Info

```c

./yasm id:000176,sig:06,src:008442+007750,op:splice,rep:128

yasm: file name already has no extension: output will be in `yasm.out'
AddressSanitizer:DEADLYSIGNAL
=================================================================
==3784849==ERROR: AddressSanitizer: SEGV on unknown address 0x000000000000 (pc 0x0000005994b7 bp 0x7ffd44e1e310 sp 0x7ffd44e1de80 T0)
==3784849==The signal is caused by a READ memory access.
==3784849==Hint: address points to the zero page.
    #0 0x5994b7 in delete_Token /home/z1r0/fuzzing/yasm/yasm/modules/preprocs/nasm/nasm-pp.c
    #1 0x5994b7 in expand_macros_in_string /home/z1r0/fuzzing/yasm/yasm/modules/preprocs/nasm/nasm-pp.c:2317:16
    #2 0x5994b7 in do_directive /home/z1r0/fuzzing/yasm/yasm/modules/preprocs/nasm/nasm-pp.c:2873:17
    #3 0x58994f in pp_getline /home/z1r0/fuzzing/yasm/yasm/modules/preprocs/nasm/nasm-pp.c:5083:13
    #4 0x58291c in nasm_preproc_get_line /home/z1r0/fuzzing/yasm/yasm/modules/preprocs/nasm/nasm-preproc.c:198:12
    #5 0x578570 in nasm_parser_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:219:13
    #6 0x577618 in nasm_do_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parser.c:66:5
    #7 0x577618 in nasm_parser_do_parse /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parser.c:83:5
    #8 0x4c6eae in do_assemble /home/z1r0/fuzzing/yasm/yasm/frontends/yasm/yasm.c:521:5
    #9 0x4c6eae in main /home/z1r0/fuzzing/yasm/yasm/frontends/yasm/yasm.c:753:12
    #10 0x7f150c316082 in __libc_start_main /build/glibc-SzIz7B/glibc-2.31/csu/../csu/libc-start.c:308:16
    #11 0x41c47d in _start (/home/z1r0/fuzzing/yasm/yasm/yasm+0x41c47d)

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: SEGV /home/z1r0/fuzzing/yasm/yasm/modules/preprocs/nasm/nasm-pp.c in delete_Token
==3784849==ABORTING

```



