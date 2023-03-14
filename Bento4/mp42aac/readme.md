
# Summary
Hello, I found out-of-memory bug in mp42aac

# BUG

out-of-memory (/home/ubuntu/fuzz/asan_bento4/Bento4/cmakebuild/mp42aac+0x4c44dd) in operator new(unsigned long)

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
./mp42aac poc4.mp4 /dev/null

=================================================================
==1258592==ERROR: AddressSanitizer: allocator is out of memory trying to allocate 0x800000010 bytes
    #0 0x4c44dd in operator new(unsigned long) (/home/ubuntu/fuzz/asan_bento4/Bento4/cmakebuild/mp42aac+0x4c44dd)
    #1 0x6054ee in AP4_Array<AP4_TrunAtom::Entry>::EnsureCapacity(unsigned int) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4Array.h:172:25
    #2 0x6054ee in AP4_Array<AP4_TrunAtom::Entry>::SetItemCount(unsigned int) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4Array.h:210:25
    #3 0x6054ee in AP4_TrunAtom::AP4_TrunAtom(unsigned int, unsigned char, unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:150:9
    #4 0x604de2 in AP4_TrunAtom::Create(unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:51:16
    #5 0x53a0dd in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:438:20
    #6 0x5390e1 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #7 0x57718b in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #8 0x5763de in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #9 0x5763de in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #10 0x53a8dc in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #11 0x5390e1 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #12 0x57718b in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #13 0x5763de in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #14 0x5763de in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #15 0x53a8dc in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #16 0x5390e1 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #17 0x53890b in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:154:12
    #18 0x4ceffe in AP4_File::ParseStream(AP4_ByteStream&, AP4_AtomFactory&, bool) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4File.cpp:104:12
    #19 0x4cf50a in AP4_File::AP4_File(AP4_ByteStream&, bool) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4File.cpp:78:5
    #20 0x4c7232 in main /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Apps/Mp42Aac/Mp42Aac.cpp:250:22
    #21 0x7fb9e650c082 in __libc_start_main (/lib/x86_64-linux-gnu/libc.so.6+0x24082)

==1258592==HINT: if you don't care about these errors you may set allocator_may_return_null=1
SUMMARY: AddressSanitizer: out-of-memory (/home/ubuntu/fuzz/asan_bento4/Bento4/cmakebuild/mp42aac+0x4c44dd) in operator new(unsigned long)
==1258592==ABORTING
```

# poc

https://github.com/z1r00/fuzz_vuln/blob/main/Bento4/mp42aac/poc4.zip





