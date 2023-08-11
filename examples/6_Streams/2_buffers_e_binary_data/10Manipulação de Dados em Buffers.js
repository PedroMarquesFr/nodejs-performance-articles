let buf = Buffer.alloc(10);
buf.writeInt8(0x68, 0);  // 'h' em hexadecimal

console.log(buf.toString()); // imprime 'h'

let bufHello = Buffer.from('hello');
let value = bufHello.readInt8(0);

console.log(value); // imprime 104, que é o valor ASCII de 'h'