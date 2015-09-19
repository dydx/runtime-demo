# Runtime.js demo
Just mucking around with this thing I found on Twitter

#Installation

## install dependencies
```
npm install runtimejs
npm install runtimeify -g
npm install runtime-tools -g
```

## bundle up the ramdisk image
```
runtimeify index.js -o initrd
```

## make sure qemu is installed
```
sudo apt-get install qemu
```

# run that bad-boy in qemu
```
runtime-qemu ./initrd
```
