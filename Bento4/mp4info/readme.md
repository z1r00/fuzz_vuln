
# Summary
Hello, I found out-of-memory bug in mp4info

# BUG

out-of-memory (/home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/cmakebuild/mp4info+0x4c44ed) in operator new(unsigned long)

# Build

ubuntu 20.04

```
export CC=clang
export CXX=clang++
export CFLAGS="-fsanitize=address -g"
export CXXFLAGS="-fsanitize=address -g"
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
make
```

```
./mp4info poc2.mp4

File:
  major brand:      mp42
  minor version:    1
  compatible brand: isom
  compatible brand: mp42
  compatible brand: dash
  fast start:       yes

Movie:
  duration:   0 (movie timescale units)
  duration:   0 (ms)
  time scale: 600
  fragments:  yes

Found 2 Tracks
Track 1:
  flags:        15 ENABLED IN-MOVIE IN-PREVIEW
  id:           1
  type:         Video
  duration: 0 ms
  language: eng
  media:
    sample count: 0
    timescale:    25
    duration:     0 (media timescale units)
    duration:     0 (ms)
=================================================================
==318973==ERROR: AddressSanitizer: allocator is out of memory trying to allocate 0x800000010 bytes
    #0 0x4c44ed in operator new(unsigned long) (/home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/cmakebuild/mp4info+0x4c44ed)
    #1 0x5c311e in AP4_Array<AP4_TrunAtom::Entry>::EnsureCapacity(unsigned int) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4Array.h:172:25
    #2 0x5c311e in AP4_Array<AP4_TrunAtom::Entry>::SetItemCount(unsigned int) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4Array.h:210:25
    #3 0x5c311e in AP4_TrunAtom::AP4_TrunAtom(unsigned int, unsigned char, unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:150:9
    #4 0x5c2a12 in AP4_TrunAtom::Create(unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:51:16
    #5 0x4fa6fd in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:438:20
    #6 0x4f9701 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #7 0x50befb in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #8 0x50b14e in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #9 0x50b14e in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #10 0x4faefc in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #11 0x4f9701 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #12 0x50befb in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #13 0x50b14e in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #14 0x50b14e in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #15 0x4faefc in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #16 0x4f9701 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #17 0x4f8f2b in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:154:12
    #18 0x53df79 in AP4_LinearReader::AdvanceFragment() /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4LinearReader.cpp:350:31
    #19 0x53ec11 in AP4_LinearReader::Advance(bool) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4LinearReader.cpp:443:33
    #20 0x6060000002bf  (<unknown module>)

==318973==HINT: if you don't care about these errors you may set allocator_may_return_null=1
SUMMARY: AddressSanitizer: out-of-memory (/home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/cmakebuild/mp4info+0x4c44ed) in operator new(unsigned long)
==318973==ABORTING

```

# poc

https://github.com/z1r00/fuzz_vuln/blob/main/Bento4/mp4info/poc2.zip



