#Uma forma de executar esses comandos é copiá-los para um terminal ou cmd para executá-los, uma vez que o python já esteja instalado.

#Operações Simples com Números
print(((2 * (10 / 3))+ 0.333333333333333))      #Expressão Aritmética

print(2**3**4)                                  #Exponenciação

print(5 // 2)                                   #floor division

print(20 % 6)                                   #module

#String
print("Foo" + " " + "Fighters")

print("z" * 10)

x = "logica"
x += "mente"
print(x)

x = 'Peace, Love and Hope!'
print("A variável 'x' contém: " + x)
print("Existem " + str(len(x)) +" caracteres nessa string.")
print("Todas maiúsculas: " + x.upper())
print("Todas mínúsculas: " + x.lower())
x.split()
x.split(',')
x.replace("Hope", "Respect")
print("Após substituir 'Hope' por 'Respect': " + x)

x[1]                #Pega o caracter armazenado no índice '1'
x[1:]               #Pega tudo a partir do índice '1'
x[:3]               #Pega tudo até o índice '3'
x[:]                #Pega tudo
x[-1]               #Pega a última letra
x[:-1]              #Pega tudo menos a última letra
x[::1]              #Pega tudo de um em um
x[::2]              #Pega tudo de 2 em 2
x[::-1]             #Pega tudo de trás pra frente

#Novas Linhas e Texto Multilinha
print("One\nTwo\nThree")

print("""Esse é
um texto
multilinha.""")

#Listas
cars = ["Ferrari", "Mercedes-Benz", "Lamborghini"]
cars[0] = "Fiat"
cars.append("Ferrari")
cars.insert(4, "Subaru")
cars.pop()
cars.pop(1)
print(cars)

final_scores_1 = [1000, 500, 800, 700, 600, 900]
final_scores_2 = [1200, 400, 1000, 600, 800]
print("Valores Desordenados: " + str(final_scores_1))
final_scores_1.sort()
print("Valores Ordenados: " + str(final_scores_1))
print("Maior Valor: " + str(max(final_scores_1)))
print("Menor Valor: " + str(min(final_scores_1)))
print("A soma de todos os valores: " + str(sum(final_scores_1)))
total_scores = final_scores_1 + final_scores_2
print("Após adicionar outro dataset (joining lists): " + str(total_scores))
print("Quantos pontos iguais a 1000 existem? " + str(total_scores.count(1000)))
print("Existe algum ponto igual a 0? " + str(0 in total_scores))

#Tipos de Dados
variable = 6.66
type(variable)

int()
str()
float()
bool()
list()
dict()                  #Pegar uma lista de tuplas e fazer um dicionário delas
set()                   
tuple()                 #Cria uma tupla de uma lista de valores

#Entradas dos Usuários
name = input("Nome: ")
idade = input("Idade: ")
print(name + " tem " + idade + " anos de idade.")

#Walrus Operator
print(num:=int(input()))

#Boolean Logic
print(1 == 1 and 2 == 3 or 5 == 5)

print(not 7 > 5)

#If
status = "Executando!"
atrasado = False

if status == "Não iniciado!" and atrasado == False:
    print(f"{status} Ainda não deu o horário!")
elif status == "Não iniciado!" and atrasado == True:
    print(f"{status} Está atrasado, favor iniciar!")
elif status == "Executando!" and atrasado == False:
    print(f"{status} Como começou atrasado, favor atentar-se à execução!")
elif status == "Executando!" and atrasado == True:
    print(f"{status} Sem atrasos, por enquanto!")
else:
    print("Finalizado!")

#While
counter = 0
while (counter <= 10):
    print(counter)
    counter += 1

#For
for i in range(4):
    print("***********----------")
    
for i in range(4):
    print("---------------------")

#---

final_scores = [170, 221, 89, 303, 157]
bonus = 50
for score in final_scores:
    print(score + 1)

#Functions
def display_half(number):
    half = number / 2
    print(half)

display_half(10)

#---
def final_game(winner):
    print(f"The winner is {winner}")

final_game("William")

#---
def age_label(age):
    label = "User Age: " + age
    return label

user_age = age_label("34")
print(user_age)