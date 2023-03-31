# stack-overflow yasm/modules/parsers/nasm/nasm-parse.c:1303 in parse_expr5

## project address

https://github.com/yasm/yasm

## info

OS：Ubuntu20.04 TLS

Build: ./autogen.sh && make distclean && CC=gcc CXX=g++ CFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" CXXFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" ./configure --prefix=$PWD/build --disable-shared && make -j && make install

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/yasm/stack-overflow/parse_expr5/id:000456%2Csig:06%2Csrc:000215%2B005032%2Cop:splice%2Crep:64

## ASAN Info

```c

./yasm id:000456,sig:06,src:000215+005032,op:splice,rep:64

yasm: file name already has no extension: output will be in `yasm.out'
AddressSanitizer:DEADLYSIGNAL
=================================================================
==3060203==ERROR: AddressSanitizer: stack-overflow on address 0x7ffebdf10ff8 (pc 0x00000063de80 bp 0x7ffebdf11120 sp 0x7ffebdf11000 T0)
    #0 0x63de80 in nasm_parser_lex /home/z1r0/fuzzing/yasm/yasm/./modules/parsers/nasm/nasm-token.re:117
    #1 0x57d60d in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1400:13
    #2 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #3 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #4 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #5 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #6 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #7 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #8 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #9 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #10 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #11 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #12 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #13 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #14 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #15 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #16 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #17 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #18 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #19 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #20 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #21 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #22 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #23 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #24 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #25 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #26 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #27 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #28 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #29 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #30 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #31 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #32 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #33 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #34 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #35 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #36 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #37 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #38 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #39 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #40 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #41 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #42 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #43 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #44 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #45 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #46 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #47 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #48 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #49 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #50 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #51 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #52 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #53 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #54 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #55 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #56 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #57 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #58 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #59 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #60 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #61 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #62 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #63 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #64 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #65 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #66 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #67 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #68 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #69 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #70 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #71 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #72 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #73 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #74 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #75 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #76 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #77 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #78 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #79 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #80 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #81 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #82 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #83 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #84 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #85 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #86 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #87 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #88 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #89 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #90 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #91 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #92 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #93 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #94 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #95 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #96 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #97 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #98 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #99 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #100 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #101 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #102 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #103 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #104 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #105 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #106 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #107 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #108 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #109 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #110 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #111 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #112 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #113 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #114 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #115 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #116 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #117 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #118 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #119 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #120 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #121 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #122 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #123 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #124 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #125 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #126 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #127 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #128 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #129 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #130 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #131 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #132 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #133 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #134 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #135 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #136 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #137 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #138 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #139 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #140 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #141 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #142 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #143 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #144 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #145 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #146 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #147 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #148 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #149 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #150 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #151 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #152 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #153 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #154 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #155 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #156 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #157 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #158 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #159 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #160 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #161 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #162 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #163 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #164 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #165 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #166 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #167 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #168 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #169 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #170 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #171 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #172 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #173 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #174 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #175 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #176 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #177 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #178 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #179 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #180 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #181 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #182 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #183 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #184 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #185 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #186 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #187 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #188 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #189 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #190 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #191 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #192 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #193 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #194 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #195 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #196 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #197 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #198 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #199 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #200 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #201 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #202 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #203 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #204 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #205 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #206 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #207 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #208 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #209 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #210 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #211 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #212 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #213 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #214 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #215 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #216 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #217 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #218 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #219 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #220 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #221 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #222 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #223 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #224 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #225 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #226 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #227 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #228 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #229 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #230 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #231 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #232 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #233 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #234 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #235 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #236 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #237 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #238 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #239 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #240 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #241 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #242 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #243 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #244 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #245 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #246 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #247 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #248 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9

SUMMARY: AddressSanitizer: stack-overflow /home/z1r0/fuzzing/yasm/yasm/./modules/parsers/nasm/nasm-token.re:117 in nasm_parser_lex
==3060203==ABORTING

```




