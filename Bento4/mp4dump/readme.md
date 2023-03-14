
# Summary
Hello, I found out-of-memory bug in mp4dump

# BUG

out-of-memory (/home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/cmakebuild/mp4dump+0x4c44fd) in operator new(unsigned long)

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
./mp4dump poc1.mp4

[ftyp] size=8+16
  major_brand = iso5
  minor_version = 1
  compatible_brand = dash
  compatible_brand = iso5
[free] size=8+50
[moov] size=8+673
  [mvhd] size=12+96
    timescale = 1000
    duration = 0
    duration(ms) = 0
  [mvex] size=8+48
    [mehd] size=12+4
      duration = 2043
    [trex] size=12+20
      track id = 1
      default sample description index = 1
      default sample duration = 1024
      default sample size = 0
      default sample flags = 0
  [trak] size=8+404
    [tkhd] size=12+80, flags=f
      enabled = 1
      id = 1
      duration = 0
      width = 0.000000
      height = 0.000000
    [mdia] size=8+304
      [mdhd] size=12+20
        timescale = 44100
        duration = 0
        duration(ms) = 0
        language = und
      [hdlr] size=12+33
        handler_type = soun
        handler_name = SoundHandler
      [minf] size=8+219
        [smhd] size=12+4
          balance = 0
        [dinf] size=8+28
          [dref] size=12+16
            [url ] size=12+0, flags=1
              location = [local to file]
        [stbl] size=8+159
          [stsd] size=12+79
            entry_count = 1
            [mp4a] size=8+67
              data_reference_index = 1
              channel_count = 2
              sample_size = 16
              sample_rate = 44100
              [esds] size=12+27
                [ESDescriptor] size=2+25
                  es_id = 1
                  stream_priority = 0
                  [DecoderConfig] size=2+17
                    stream_type = 5
                    object_type = 64
                    up_stream = 0
                    buffer_size = 0
                    max_bitrate = 128000
                    avg_bitrate = 58307
                    DecoderSpecificInfo = 12 08
                  [Descriptor:06] size=2+1
          [stts] size=12+4
            entry_count = 0
          [stsc] size=12+4
            entry_count = 0
          [stsz] size=12+8
            sample_size = 0
            sample_count = 0
          [stco] size=12+4
            entry_count = 0
  [udta] size=8+89
    [meta] size=12+77
      [hdlr] size=12+21
        handler_type = mdir
        handler_name =
      [ilst] size=8+36
        [.too] size=8+28
          [data] size=8+20
            type = 1
            lang = 0
            value = Lavf55.8.100
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 0
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 1
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 0
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1153
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 10240
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 2
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 10240
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1397
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 20480
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 3
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 20480
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1799
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 30720
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 4
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 30720
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1819
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 40960
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 5
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 40960
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1811
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 51200
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 6
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 51200
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1810
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 61440
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 7
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 61440
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1832
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 71680
  first_offset = 0
[moof] size=8+120
  [mfhd] size=12+4
    sequence number = 8
  [traf] size=8+96
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 71680
    [trun] size=12+48, flags=201
      sample count = 10
      data offset = 136
[mdat] size=8+1811
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 81920
  first_offset = 0
[moof] size=8+108
  [mfhd] size=12+4
    sequence number = 9
  [traf] size=8+84
    [tfhd] size=12+8, flags=20020
      track ID = 1
      default sample flags = 2000000
    [tfdt] size=12+4
      base media decode time = 81920
    [trun] size=12+36, flags=201
      sample count = 7
      data offset = 124
[mdat] size=8+1285
[sidx] size=12+32
  reference_ID = 1
  timescale = 44100
  earliest_presentation_time = 89088
  first_offset = 0
=================================================================
==3592421==ERROR: AddressSanitizer: allocator is out of memory trying to allocate 0xc00000010 bytes
    #0 0x4c44fd in operator new(unsigned long) (/home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/cmakebuild/mp4dump+0x4c44fd)
    #1 0x59f18e in AP4_Array<AP4_TrunAtom::Entry>::EnsureCapacity(unsigned int) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4Array.h:172:25
    #2 0x59f18e in AP4_Array<AP4_TrunAtom::Entry>::SetItemCount(unsigned int) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4Array.h:210:25
    #3 0x59f18e in AP4_TrunAtom::AP4_TrunAtom(unsigned int, unsigned char, unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:150:9
    #4 0x59ea82 in AP4_TrunAtom::Create(unsigned int, AP4_ByteStream&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4TrunAtom.cpp:51:16
    #5 0x4df50d in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:438:20
    #6 0x4de511 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #7 0x4f0c1b in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #8 0x4efe6e in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #9 0x4efe6e in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #10 0x4dfd0c in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #11 0x4de511 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #12 0x4f0c1b in AP4_ContainerAtom::ReadChildren(AP4_AtomFactory&, AP4_ByteStream&, unsigned long long) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:194:12
    #13 0x4efe6e in AP4_ContainerAtom::AP4_ContainerAtom(unsigned int, unsigned long long, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:139:5
    #14 0x4efe6e in AP4_ContainerAtom::Create(unsigned int, unsigned long long, bool, bool, AP4_ByteStream&, AP4_AtomFactory&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4ContainerAtom.cpp:88:20
    #15 0x4dfd0c in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned int, unsigned int, unsigned long long, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:816:20
    #16 0x4de511 in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, unsigned long long&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:234:14
    #17 0x4ddd3b in AP4_AtomFactory::CreateAtomFromStream(AP4_ByteStream&, AP4_Atom*&) /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Core/Ap4AtomFactory.cpp:154:12
    #18 0x4c8d57 in main /home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/Source/C++/Apps/Mp4Dump/Mp4Dump.cpp:342:25
    #19 0x7ffff7a6b082 in __libc_start_main /build/glibc-SzIz7B/glibc-2.31/csu/../csu/libc-start.c:308:16

==3592421==HINT: if you don't care about these errors you may set allocator_may_return_null=1
SUMMARY: AddressSanitizer: out-of-memory (/home/ubuntu/fuzz/Bento4_fuzz/asan/Bento4/cmakebuild/mp4dump+0x4c44fd) in operator new(unsigned long)
==3592421==ABORTING
```

# poc

https://github.com/z1r00/fuzz_vuln/blob/main/Bento4/mp4dump/poc1.zip


