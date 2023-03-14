
# Summary
Hello, I found SEGV bug in Ap4TrunAtom.h

# BUG

SEGV /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4TrunAtom.h:80:80 in AP4_TrunAtom::SetDataOffset(int)

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

AddressSanitizer:DEADLYSIGNAL
=================================================================
==1110587==ERROR: AddressSanitizer: SEGV on unknown address 0x000000000028 (pc 0x000000562a98 bp 0x7ffdb6c29220 sp 0x7ffdb6c28e80 T0)
==1110587==The signal is caused by a WRITE memory access.
==1110587==Hint: address points to the zero page.
    #0 0x562a98 in AP4_TrunAtom::SetDataOffset(int) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4TrunAtom.h:80:80
    #1 0x562a98 in AP4_Processor::ProcessFragments(AP4_MoovAtom*, AP4_List<AP4_AtomLocator>&, AP4_ContainerAtom*, AP4_SidxAtom*, unsigned long long, AP4_ByteStream&, AP4_ByteStream&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4Processor.cpp:285:19
    #2 0x567c4f in AP4_Processor::Process(AP4_ByteStream&, AP4_ByteStream&, AP4_ByteStream*, AP4_Processor::ProgressListener*, AP4_AtomFactory&) /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4Processor.cpp:721:18
    #3 0x4c7b98 in main /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Apps/Mp4Decrypt/Mp4Decrypt.cpp:258:29
    #4 0x7ff6f6ed9082 in __libc_start_main (/lib/x86_64-linux-gnu/libc.so.6+0x24082)
    #5 0x41c63d in _start (/home/ubuntu/fuzz/asan_bento4/Bento4/cmakebuild/mp4decrypt+0x41c63d)

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: SEGV /home/ubuntu/fuzz/asan_bento4/Bento4/Source/C++/Core/Ap4TrunAtom.h:80:80 in AP4_TrunAtom::SetDataOffset(int)
==1110587==ABORTING

```

# poc

https://github.com/z1r00/fuzz_vuln/blob/main/Bento4/mp4decrypt/sigv/poc5.zip


