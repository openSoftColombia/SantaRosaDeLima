export const getNumberRoman = (number) => {
  let values = [1, 5, 10, 50, 100, 500, 1000],
    letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M',],
    res = [],
    num, letter, val, pos, insert

  for (let i = 6; num = values[i], letter = letters[i]; i--) {
    // Suficientemente grande
    if (number >= num) {
      // Número de letras repetidas
      var r = Math.floor(number / num);

      // Restamos el actual
      number -= r * num;

      if (r < 4) {
        // Metemos las letras
        while (r--) {
          res.push(letter);
        }
      } else {
        // No se pueden repetir 4+ veces
        val = res.pop(); // Última letra

        // Si es el string vacío o letra == "M" (no hay anterior)
        // usamos la letra anterior a esta
        pos = (val ? letters.indexOf(val) : i) + 1;

        // Y si letra == "M" -> letras[pos] no existirá y usamos M
        insert = letter + (letters[pos] || 'M');

        // Insertamos el string
        res.push(insert);
      }
    } else {
      // Si no vamos a poner letra usamos un ""
      // para que no afecte pop
      res.push('');
    }
  }

  return res.join('');
}