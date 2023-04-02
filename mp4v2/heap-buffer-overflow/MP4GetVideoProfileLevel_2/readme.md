# Heap-buffer-overflow mp4v2/src/mp4.cpp:520:47 in MP4GetVideoProfileLevel

## project address

https://github.com/enzo1982/mp4v2

## info

OS：Ubuntu20.04 TLS

Build: cmake . && make

mp4info - MP4v2 2.1.2

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mp4v2/heap-buffer-overflow/MP4GetVideoProfileLevel/id:000008%2Csig:06%2Csrc:000032%2B001084%2Ctime:20947124%2Cexecs:3427746%2Cop:splice%2Crep:2

## ASAN Info

```c
./mp4info id:000008,sig:06,src:000032+001084,time:20947124,execs:3427746,op:splice,rep:2

./mp4v2/mp4info version 2.1.2
mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000008,sig:06,src:000032+001084,time:20947124,execs:3427746,op:splice,rep:2:
Read: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000008,sig:06,src:000032+001084,time:20947124,execs:3427746,op:splice,rep:2": Mandatory descriptor 0x06 missing
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000008,sig:06,src:000032+001084,time:20947124,execs:3427746,op:splice,rep:2": invalid atom size, extends outside parent atom - skipping to end of "" "mdat" 245779 vs 4600
FindIntegerProperty: no such property - moov.iods.visualProfileLevelId (/home/z1r0/fuzzing/mp4v2/src/mp4file.cpp,831)
=================================================================
==3317208==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x602000004314 at pc 0x7fb2b64ce45c bp 0x7ffde64ce930 sp 0x7ffde64ce928
READ of size 1 at 0x602000004314 thread T0
    #0 0x7fb2b64ce45b in MP4GetVideoProfileLevel /home/z1r0/fuzzing/mp4v2/src/mp4.cpp:520:47
    #1 0x7fb2b653c6bc in mp4v2::impl::PrintVideoInfo(void*, unsigned int) /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:404:20
    #2 0x7fb2b653c6bc in mp4v2::impl::PrintTrackInfo(void*, unsigned int) /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:543:21
    #3 0x7fb2b653b889 in MP4Info /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:596:39
    #4 0x7fb2b653db82 in MP4FileInfo /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:627:18
    #5 0x5653df466b41 in main /home/z1r0/fuzzing/mp4v2/util/mp4info.cpp:77:22
    #6 0x7fb2b5d43082 in __libc_start_main /build/glibc-SzIz7B/glibc-2.31/csu/../csu/libc-start.c:308:16
    #7 0x5653df33751d in _start (/home/z1r0/fuzzing/mp4v2/mp4info+0x2151d)

0x602000004314 is located 0 bytes after 4-byte region [0x602000004310,0x602000004314)
allocated by thread T0 here:
    #0 0x5653df41c1a7 in malloc /home/aep/Downloads/llvm-project-llvmorg-17-init/compiler-rt/lib/asan/asan_malloc_linux.cpp:69:3
    #1 0x7fb2b642f3c2 in mp4v2::impl::MP4Malloc(unsigned long) /home/z1r0/fuzzing/mp4v2/./src/mp4util.h:63:15
    #2 0x7fb2b652184f in mp4v2::impl::MP4BytesProperty::GetValue(unsigned char**, unsigned int*, unsigned int) /home/z1r0/fuzzing/mp4v2/src/mp4property.h:479:30
    #3 0x7fb2b652184f in mp4v2::impl::MP4File::GetBytesProperty(char const*, unsigned char**, unsigned int*) /home/z1r0/fuzzing/mp4v2/src/mp4file.cpp:1004:37
    #4 0x7fb2b652184f in mp4v2::impl::MP4File::GetTrackBytesProperty(unsigned int, char const*, unsigned char**, unsigned int*) /home/z1r0/fuzzing/mp4v2/src/mp4file.cpp:3254:5
    #5 0x7fb2b6526586 in mp4v2::impl::MP4File::GetTrackESConfiguration(unsigned int, unsigned char**, unsigned int*) /home/z1r0/fuzzing/mp4v2/src/mp4file.cpp:3668:9

SUMMARY: AddressSanitizer: heap-buffer-overflow /home/z1r0/fuzzing/mp4v2/src/mp4.cpp:520:47 in MP4GetVideoProfileLevel
Shadow bytes around the buggy address:
  0x602000004080: fa fa fd fd fa fa fd fa fa fa fd fa fa fa fd fa
  0x602000004100: fa fa 01 fa fa fa fd fd fa fa 04 fa fa fa 04 fa
  0x602000004180: fa fa 04 fa fa fa fd fa fa fa 00 00 fa fa 01 fa
  0x602000004200: fa fa fd fd fa fa 04 fa fa fa 04 fa fa fa fd fa
  0x602000004280: fa fa 00 00 fa fa 00 fa fa fa 00 00 fa fa fd fa
=>0x602000004300: fa fa[04]fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000004380: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000004400: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000004480: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000004500: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000004580: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
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
==3317208==ABORTING

```
