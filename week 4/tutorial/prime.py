def prime():
    for i in range(2, 1001):
        add = 0
        for j in range(1, i+1):
            if i % j  == 0:
                add += 1
        if add <= 2:
            print(i)
prime()
    
            
            
