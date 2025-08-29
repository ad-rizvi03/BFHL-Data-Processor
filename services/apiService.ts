import { ApiResponse } from '../types';

export const processArrayData = (data: string[]): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        const odd_numbers: string[] = [];
        const even_numbers: string[] = [];
        const alphabets: string[] = [];
        const special_characters: string[] = [];
        let sum = 0;
        let all_alphabets_str = "";

        data.forEach(item => {
          // Check if item is a valid number string
          if (!isNaN(parseFloat(item)) && isFinite(Number(item))) {
            const num = Number(item);
            sum += num;
            if (num % 2 === 0) {
              even_numbers.push(item);
            } else {
              odd_numbers.push(item);
            }
          } else if (/^[a-zA-Z]+$/.test(item)) { // Check if item is purely alphabetic
            alphabets.push(item.toUpperCase());
            all_alphabets_str += item;
          } else { // Otherwise, it's a special character
            special_characters.push(item);
          }
        });

        const reversed_alphabets_for_concat = all_alphabets_str.split('').reverse();
        const final_concat_string = reversed_alphabets_for_concat.map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');

        const response: ApiResponse = {
          is_success: true,
          user_id: "adnan_rizvi",
          email: "adnanrizvi102@gmail.com",
          roll_number: "22BCE9131",
          odd_numbers,
          even_numbers,
          alphabets,
          special_characters,
          sum: String(sum),
          concat_string: final_concat_string,
        };
        resolve(response);
      } catch (e) {
        console.error("Error processing data:", e);
        reject(new Error("Failed to process array data."));
      }
    }, 1200);
  });
};