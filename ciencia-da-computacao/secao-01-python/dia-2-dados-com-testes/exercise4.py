# with open("arquivo.txt", "r") as file:
#     for line in file:
#         print(line)

with open("arquivo.txt", "r") as file:
    lines = file.readlines()
    arr_lines = [(line.split()[0], int(line.split()[1])) for line in lines]
    arr_filtered = [(nome, numero) for nome, numero in arr_lines if numero > 6]
    with open("arquivo2.txt", mode="w") as file2:
        for nome, numero in arr_filtered:
            file2.write(f"{nome}\n")