def soma(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + soma(n - 1)
    
soma(5)