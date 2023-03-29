# Heap-buffer-overflow src/mp4property.cpp:338:17 in mp4v2::impl::MP4StringProperty::~MP4StringProperty()

## project address

https://github.com/TechSmith/mp4v2

## info

OS：Ubuntu20.04 TLS

Build: mkdir build && cd build && cmake .. && make

## Poc

https://github.com/z1r00/fuzz_vuln/blob/main/mp4v2/heap-buffer-overflow/mp4property.cpp/poc1.mp4

## ASAN Info

```c
./mp4info poc1.mp4

./mp4info version 2.0.0
/home/ubuntu/fuzzing/mp4v2/poc1.mp4:
=================================================================
==2321319==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x602000000158 at pc 0x7f0be169f82a bp 0x7ffe0644aba0 sp 0x7ffe0644ab98
READ of size 8 at 0x602000000158 thread T0
    #0 0x7f0be169f829 in mp4v2::impl::MP4StringProperty::~MP4StringProperty() /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4property.cpp:338:17
    #1 0x7f0be169f919 in mp4v2::impl::MP4StringProperty::~MP4StringProperty() /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4property.cpp:335:1
    #2 0x7f0be161a7d4 in mp4v2::impl::MP4Atom::~MP4Atom() /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4atom.cpp:66:9
    #3 0x7f0be1587419 in mp4v2::impl::MP4FtypAtom::~MP4FtypAtom() /home/ubuntu/mprv2_fuzz/mp4v2/src/atoms.h:344:7
    #4 0x7f0be1624cd6 in mp4v2::impl::MP4Atom::ReadAtom(mp4v2::impl::MP4File&, mp4v2::impl::MP4Atom*) /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4atom.cpp:206:3
    #5 0x7f0be1626ffb in mp4v2::impl::MP4Atom::ReadChildAtoms() /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4atom.cpp:442:31
    #6 0x7f0be1625990 in mp4v2::impl::MP4Atom::Read() /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4atom.cpp:247:11
    #7 0x7f0be163960d in mp4v2::impl::MP4File::ReadFromFile() /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4file.cpp:431:18
    #8 0x7f0be1637f1f in mp4v2::impl::MP4File::Read(char const*, MP4FileProvider_s const*) /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4file.cpp:98:5
    #9 0x7f0be15e60e2 in MP4Read /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4.cpp:106:16
    #10 0x7f0be169ae58 in MP4FileInfo /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4info.cpp:614:29
    #11 0x4c8141 in main /home/ubuntu/mprv2_fuzz/mp4v2/util/mp4info.cpp:77:22
    #12 0x7f0be0e3f082 in __libc_start_main (/lib/x86_64-linux-gnu/libc.so.6+0x24082)
    #13 0x41d52d in _start (/home/ubuntu/mprv2_fuzz/mp4v2/build/mp4info+0x41d52d)

0x602000000158 is located 0 bytes to the right of 8-byte region [0x602000000150,0x602000000158)
allocated by thread T0 here:
    #0 0x495f89 in realloc (/home/ubuntu/mprv2_fuzz/mp4v2/build/mp4info+0x495f89)
    #1 0x7f0be1534c3d in mp4v2::impl::MP4Realloc(void*, unsigned int) /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4util.h:80:18
    #2 0x7f0be16b428f in mp4v2::impl::MP4StringArray::Resize(unsigned int) /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4array.h:138:1
    #3 0x7f0be169f9a3 in mp4v2::impl::MP4StringProperty::SetCount(unsigned int) /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4property.cpp:346:14

SUMMARY: AddressSanitizer: heap-buffer-overflow /home/ubuntu/mprv2_fuzz/mp4v2/src/mp4property.cpp:338:17 in mp4v2::impl::MP4StringProperty::~MP4StringProperty()
Shadow bytes around the buggy address:
  0x0c047fff7fd0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c047fff7fe0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c047fff7ff0: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
  0x0c047fff8000: fa fa 00 00 fa fa fd fd fa fa 00 00 fa fa 00 00
  0x0c047fff8010: fa fa 00 00 fa fa 00 00 fa fa 00 00 fa fa 00 00
=>0x0c047fff8020: fa fa fd fa fa fa fd fa fa fa 00[fa]fa fa fd fd
  0x0c047fff8030: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c047fff8040: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c047fff8050: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c047fff8060: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
  0x0c047fff8070: fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa
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
==2321319==ABORTING
```

