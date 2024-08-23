# 1. Reverse String Alphabet
def reverse_alphabet(s):
    alphabets = ''.join([c for c in s if c.isalpha()])
    reversed_alphabets = alphabets[::-1]
    digits = ''.join([c for c in s if c.isdigit()])
    return reversed_alphabets + digits

# 2. Mencari Kata Terpanjang dalam Kalimat
def longest(sentence):
    words = sentence.split()
    longest_word = max(words, key=len)
    return longest_word, len(longest_word)

# 3. Menghitung Frekuensi Kata dalam Array
def count_query_occurrences(input_array, query_array):
    result = []
    for query in query_array:
        result.append(input_array.count(query))
    return result

# 4. Pengurangan Jumlah Diagonal dalam Matriks NxN
def diagonal_difference(matrix):
    n = len(matrix)
    diagonal1 = sum(matrix[i][i] for i in range(n))
    diagonal2 = sum(matrix[i][n-i-1] for i in range(n))
    return diagonal1, diagonal2, abs(diagonal1 - diagonal2)

# Menu untuk memilih fungsi yang akan dijalankan
def main():
    print("Pilih fungsi yang ingin dijalankan:")
    print("1. Reverse String Alphabet")
    print("2. Mencari Kata Terpanjang dalam Kalimat")
    print("3. Menghitung Frekuensi Kata dalam Array")
    print("4. Pengurangan Jumlah Diagonal dalam Matriks NxN")
    choice = input("Masukkan pilihan Anda (1/2/3/4): ")

    if choice == "1":
        string = input("Masukkan string (contoh: NEGIE1): ")
        result1 = reverse_alphabet(string)
        print(f"Hasil reverse alphabet dari '{string}' adalah: {result1}")
    
    elif choice == "2":
        sentence = input("Masukkan kalimat: ")
        word, length = longest(sentence)
        print(f"Kata terpanjang adalah '{word}' dengan panjang {length} karakter.")
    
    elif choice == "3":
        print("Contoh INPUT: xc,dz,bbb,dz")
        print("Contoh QUERY: bbb,ac,dz")
        input_array = input("Masukkan array INPUT (pisahkan dengan koma): ").split(',')
        query_array = input("Masukkan array QUERY (pisahkan dengan koma): ").split(',')
        result3 = count_query_occurrences(input_array, query_array)
        print(f"Frekuensi kata dalam QUERY di INPUT adalah: {result3}")
        print(f"Output: {result3} karena:")
        for i, query in enumerate(query_array):
            print(f"- Kata '{query}' terdapat {result3[i]} pada INPUT")
    
    elif choice == "4":
        print("Contoh Matriks: [[1, 2, 0], [4, 5, 6], [7, 8, 9]]")
        n = int(input("Masukkan ukuran matriks NxN: "))
        matrix = []
        for i in range(n):
            row = list(map(int, input(f"Masukkan baris {i+1} (pisahkan dengan spasi): ").split()))
            matrix.append(row)
        diagonal1, diagonal2, difference = diagonal_difference(matrix)
        print(f"Diagonal pertama = {' + '.join(str(matrix[i][i]) for i in range(n))} = {diagonal1}")
        print(f"Diagonal kedua = {' + '.join(str(matrix[i][n-i-1]) for i in range(n))} = {diagonal2}")
        print(f"Maka hasilnya adalah {diagonal1} - {diagonal2} = {difference}")
    
    else:
        print("Pilihan tidak valid. Silakan coba lagi.")

if __name__ == "__main__":
    main()
