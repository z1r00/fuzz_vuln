#  stack-overflow yasm/modules/parsers/nasm/nasm-parse.c:1235 in parse_expr1

## project address

https://github.com/yasm/yasm

## info

OS：Ubuntu20.04 TLS

Build: ./autogen.sh && make distclean && CC=gcc CXX=g++ CFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" CXXFLAGS="-fsanitize=address -fno-omit-frame-pointer -g" ./configure --prefix=$PWD/build --disable-shared && make -j && make install

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/yasm/stack-overflow/parse_expr1/id:000206%2Csig:06%2Csrc:007018%2B003531%2Cop:splice%2Crep:32

## ASAN Info

```c

./yasm id:000206,sig:06,src:007018+003531,op:splice,rep:32

yasm: file name already has no extension: output will be in `yasm.out'
AddressSanitizer:DEADLYSIGNAL
=================================================================
==2596551==ERROR: AddressSanitizer: stack-overflow on address 0x7ffe5cfb8fe8 (pc 0x00000057e8cb bp 0x7ffe5cfb9040 sp 0x7ffe5cfb8ff0 T0)
    #0 0x57e8cb in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1235
    #1 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #2 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #3 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #4 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #5 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #6 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #7 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #8 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #9 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #10 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #11 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #12 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #13 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #14 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #15 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #16 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #17 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #18 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #19 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #20 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #21 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #22 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #23 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #24 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #25 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #26 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #27 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #28 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #29 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #30 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #31 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #32 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #33 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #34 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #35 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #36 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #37 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #38 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #39 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #40 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #41 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #42 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #43 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #44 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #45 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #46 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #47 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #48 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #49 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #50 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #51 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #52 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #53 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #54 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #55 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #56 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #57 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #58 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #59 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #60 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #61 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #62 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #63 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #64 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #65 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #66 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #67 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #68 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #69 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #70 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #71 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #72 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #73 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #74 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #75 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #76 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #77 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #78 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #79 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #80 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #81 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #82 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #83 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #84 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #85 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #86 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #87 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #88 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #89 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #90 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #91 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #92 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #93 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #94 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #95 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #96 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #97 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #98 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #99 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #100 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #101 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #102 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #103 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #104 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #105 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #106 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #107 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #108 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #109 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #110 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #111 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #112 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #113 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #114 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #115 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #116 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #117 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #118 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #119 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #120 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #121 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #122 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #123 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #124 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #125 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #126 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #127 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #128 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #129 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #130 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #131 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #132 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #133 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #134 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #135 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #136 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #137 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #138 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #139 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #140 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #141 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #142 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #143 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #144 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #145 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #146 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #147 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #148 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #149 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #150 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #151 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #152 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #153 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #154 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #155 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #156 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #157 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #158 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #159 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #160 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #161 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #162 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #163 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #164 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #165 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #166 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #167 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #168 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #169 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #170 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #171 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #172 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #173 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #174 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #175 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #176 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #177 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #178 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #179 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #180 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #181 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #182 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #183 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #184 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #185 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #186 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #187 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #188 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #189 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #190 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #191 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #192 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #193 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #194 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #195 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #196 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #197 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #198 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #199 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #200 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #201 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #202 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #203 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #204 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #205 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #206 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #207 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #208 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #209 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #210 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #211 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #212 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #213 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #214 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #215 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #216 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #217 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #218 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #219 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #220 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #221 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #222 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #223 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #224 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #225 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #226 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #227 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #228 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #229 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #230 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #231 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #232 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #233 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #234 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #235 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #236 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #237 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #238 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #239 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9
    #240 0x57ef2f in parse_expr4 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1277:9
    #241 0x57ecbc in parse_expr3 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1249:9
    #242 0x57eacc in parse_expr2 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1242:5
    #243 0x57e8dc in parse_expr1 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1236:5
    #244 0x57d29c in parse_expr0 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1230:5
    #245 0x57d0ac in parse_bexpr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1224:5
    #246 0x57ceb6 in parse_expr /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1215:13
    #247 0x57d62e in parse_expr6 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1401:17
    #248 0x57f13f in parse_expr5 /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1305:9

SUMMARY: AddressSanitizer: stack-overflow /home/z1r0/fuzzing/yasm/yasm/modules/parsers/nasm/nasm-parse.c:1235 in parse_expr1
==2596551==ABORTING

```




