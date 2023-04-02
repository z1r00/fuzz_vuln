# Heap-buffer-overflow mp4v2/src/mp4.cpp:519:33 in MP4GetVideoProfileLevel

## project address

https://github.com/enzo1982/mp4v2

## info

OS：Ubuntu20.04 TLS

Build: cmake . && make

mp4info - MP4v2 2.1.2

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mp4v2/heap-buffer-overflow/MP4GetVideoProfileLevel/id:000000%2Csig:06%2Csrc:000758%2Ctime:1159607%2Cexecs:323115%2Cop:havoc%2Crep:8

## ASAN Info

```c
./mp4info id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8

mp4v2/mp4info version 2.1.2
mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8:
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": atom type �ods is suspect
Read: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": Mandatory descriptor 0x06 missing
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": invalid atom size, extends outside parent atom - skipping to end of "hinf" "dmax" 8458446 vs 4584
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": invalid atom size, extends outside parent atom - skipping to end of "stbl" "" 1953728578 vs 9686
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": atom type  is suspect
ReadChildAtoms: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": In atom stbl missing child atom stsc
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": invalid atom size, extends outside parent atom - skipping to end of "moov" "�Ѱ>" 4026601461 vs 11495
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": atom type �Ѱ> is suspect
ReadAtom: "mp4v2_fuzzing/mp4info_out/fuzzer1/crashes/id:000000,sig:06,src:000758,time:1159607,execs:323115,op:havoc,rep:8": invalid atom size, extends outside parent atom - skipping to end of "" "miso" 829005910 vs 11597
MP4Track: invalid track (/home/z1r0/fuzzing/mp4v2/src/mp4track.cpp,239)
FindIntegerProperty: no such property - moov.iods.visualProfileLevelId (/home/z1r0/fuzzing/mp4v2/src/mp4file.cpp,831)
=================================================================
==168994==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x602000006190 at pc 0x7f0bc7cb947d bp 0x7ffd0e2ca310 sp 0x7ffd0e2ca308
READ of size 4 at 0x602000006190 thread T0
    #0 0x7f0bc7cb947c in MP4GetVideoProfileLevel /home/z1r0/fuzzing/mp4v2/src/mp4.cpp:519:33
    #1 0x7f0bc7d276bc in mp4v2::impl::PrintVideoInfo(void*, unsigned int) /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:404:20
    #2 0x7f0bc7d276bc in mp4v2::impl::PrintTrackInfo(void*, unsigned int) /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:543:21
    #3 0x7f0bc7d26889 in MP4Info /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:596:39
    #4 0x7f0bc7d28b82 in MP4FileInfo /home/z1r0/fuzzing/mp4v2/src/mp4info.cpp:627:18
    #5 0x5560e33e3b41 in main /home/z1r0/fuzzing/mp4v2/util/mp4info.cpp:77:22
    #6 0x7f0bc752e082 in __libc_start_main /build/glibc-SzIz7B/glibc-2.31/csu/../csu/libc-start.c:308:16
    #7 0x5560e32b451d in _start (/home/z1r0/fuzzing/mp4v2/mp4info+0x2151d)

0x602000006191 is located 0 bytes after 1-byte region [0x602000006190,0x602000006191)
allocated by thread T0 here:
    #0 0x5560e33991a7 in malloc /home/aep/Downloads/llvm-project-llvmorg-17-init/compiler-rt/lib/asan/asan_malloc_linux.cpp:69:3
    #1 0x7f0bc7c1a3c2 in mp4v2::impl::MP4Malloc(unsigned long) /home/z1r0/fuzzing/mp4v2/./src/mp4util.h:63:15
    #2 0x7f0bc7d0c84f in mp4v2::impl::MP4BytesProperty::GetValue(unsigned char**, unsigned int*, unsigned int) /home/z1r0/fuzzing/mp4v2/src/mp4property.h:479:30
    #3 0x7f0bc7d0c84f in mp4v2::impl::MP4File::GetBytesProperty(char const*, unsigned char**, unsigned int*) /home/z1r0/fuzzing/mp4v2/src/mp4file.cpp:1004:37
    #4 0x7f0bc7d0c84f in mp4v2::impl::MP4File::GetTrackBytesProperty(unsigned int, char const*, unsigned char**, unsigned int*) /home/z1r0/fuzzing/mp4v2/src/mp4file.cpp:3254:5
    #5 0x7f0bc7d11586 in mp4v2::impl::MP4File::GetTrackESConfiguration(unsigned int, unsigned char**, unsigned int*) /home/z1r0/fuzzing/mp4v2/src/mp4file.cpp:3668:9

SUMMARY: AddressSanitizer: heap-buffer-overflow /home/z1r0/fuzzing/mp4v2/src/mp4.cpp:519:33 in MP4GetVideoProfileLevel
Shadow bytes around the buggy address:
  0x602000005f00: fa fa 04 fa fa fa 01 fa fa fa fd fd fa fa 04 fa
  0x602000005f80: fa fa 04 fa fa fa 04 fa fa fa fd fa fa fa 00 00
  0x602000006000: fa fa 00 fa fa fa 04 fa fa fa 00 00 fa fa 00 fa
  0x602000006080: fa fa 04 fa fa fa 00 00 fa fa 00 fa fa fa 04 fa
  0x602000006100: fa fa 00 00 fa fa fd fa fa fa 00 00 fa fa 00 00
=>0x602000006180: fa fa[01]fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000006200: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000006280: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000006300: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000006380: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x602000006400: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
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
==168994==ABORTING

```


