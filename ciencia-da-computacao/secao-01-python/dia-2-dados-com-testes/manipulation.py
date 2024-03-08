LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]


with open("arquivo.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)

with open("arquivo.txt", "r") as file:
    for line in file:
        print(line)
