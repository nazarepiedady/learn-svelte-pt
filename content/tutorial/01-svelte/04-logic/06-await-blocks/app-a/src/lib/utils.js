export async function getRandomNumber() {
    // Pedir um número aleatório entre 0 e 100
    // (com um atraso, para que possamos vê-lo)
    const res = await fetch('/random-number');

    if (res.ok) {
        return await res.text();
    } else {
        // Algumas vezes a API falhará!
        throw new Error('Request failed');
    }
}