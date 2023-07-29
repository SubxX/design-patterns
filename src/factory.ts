/*
    Name - Factory
    Type - Creational Patterns

    Description - The Factory Method defines an interface for object creation but let’s 
    the subclass decide which object to create.
*/

interface EncryptionAlgorithm {
    encrypt(text: string): string
}

abstract class Encryptor {
    startEncrypt(text: string) {
        const encryptionAlgorithm = this.getEncryptionAlgorithm()
        return encryptionAlgorithm.encrypt(text)
    }
    abstract getEncryptionAlgorithm(): EncryptionAlgorithm
}


class SHA256EncryptionAlgorithm implements EncryptionAlgorithm {
    encrypt(text: string): string {
        return `[SHA256] ecrypted_${text}`
    }
}

class SHA512EncryptionAlgorithm implements EncryptionAlgorithm {
    encrypt(text: string): string {
        return `[SHA512] ecrypted_${text}`
    }
}

class SHA256Encryptor extends Encryptor {
    getEncryptionAlgorithm(): EncryptionAlgorithm {
        return new SHA256EncryptionAlgorithm()
    }
}

class SHA512Encryptor extends Encryptor {
    getEncryptionAlgorithm(): EncryptionAlgorithm {
        return new SHA512EncryptionAlgorithm()
    }
}

const SHA256 = new SHA256Encryptor()
const SHA512 = new SHA512Encryptor()

console.log(SHA256.startEncrypt('Hello'))
console.log(SHA512.startEncrypt('Hey man'))