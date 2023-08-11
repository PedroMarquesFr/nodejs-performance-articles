class BufferPool {
  constructor(size) {
    this.buffer = Buffer.alloc(size);
    this.offset = 0;
  }

  get(size) {
    if (this.buffer.length - this.offset < size) {
      // Não temos espaço suficiente no buffer, então precisamos alocar um novo
      this.buffer = Buffer.alloc(size);
      this.offset = 0;
    }

    const buf = this.buffer.slice(this.offset, this.offset + size);
    this.offset += size;

    return buf;
  }
}

const pool = new BufferPool(1024);

// Obtem um buffer de 100 bytes
const buf = pool.get(100);
