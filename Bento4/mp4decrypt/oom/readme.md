
# Summary
Hello, I found out-of-memory bug in mp4decrypt

# BUG

out-of-memory (/home/ubuntu/fuzz/asan_bento4/Bento4/cmakebuild/mp4decrypt+0x4c44ed) in operator new(unsigned long)

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
==1465845==ERROR: AddressSanitizer: allocator is out of memory trying to allocate 0x800000010 bytes
    #0 0x4c44ed in operator new(unsigned long) (/home/ubuntu/fuzz/asan_bento4/Bento4/cmakebuild/mp4decrypt+0x4c44ed)
    #1 0x5c1d7e in AP4_Array<AP4_TrunAtom::Entry>::EnsureCapacity(unsigned int) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4Array.h:172:25
    #2 0x5c1d7e in AP4_Array<AP4_TrunAtom::Entry>::SetItemCount(unsigned int) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4Array.h:210:25
    #3 0x5c1d7e in AP4_TrunAtom::AP4_TrunAtom(unsigned int, unsigned char, unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:150:9
    #4 0x5c1672 in AP4_TrunAtom::Create(unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:51:16
    #5 0x4c9fad in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:438:20
    #6 0x4c8fb1 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #7 0x50b1db in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #8 0x50a42e in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #9 0x50a42e in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #10 0x4ca7ac in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #11 0x4c8fb1 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #12 0x50b1db in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #13 0x50a42e in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #14 0x50a42e in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #15 0x4ca7ac in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #16 0x4c8fb1 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #17 0x4c87db in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, AP4_Atom*&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:154:12
    #18 0x52896e in AP4_File::ParseStream(AP4_ByteStream&, AP4_AtomFactory&, bool) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4File.cpp:104:12
    #19 0x528e7a in AP4_File::AP4_File(AP4_ByteStream&, bool) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4File.cpp:78:5
    #20 0x4c7621 in main /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Apps/Mp4Decrypt/Mp4Decrypt.cpp:202:32
    #21 0x7f99a9e02082 in __libc_start_main (/lib/x86_64-linux-gnu/libc.so.6+0x24082)

==1465845==HINT: if you don't care about these errors you may set allocator_may_return_null=1
SUMMARY: AddressSanitizer: out-of-memory (/home/ubuntu/fuzz/asan_bento4/Bento4/cmakebuild/mp4decrypt+0x4c44ed) in operator new(unsigned long)

```

# poc

https://github.com/z1r00/fuzz_vuln/blob/main/Bento4/mp4decrypt/oom/poc6.zip






