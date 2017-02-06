lista=[]
resp="si"
while resp=="si":
	usuario=input("ingrese producto: ")
	cantidad=int(input("ingrese cantidad de: "))
	resp=input("desea continuar si/no: ")
	lista.append(usuario)
	lista += [cantidad]
for usuario in (lista):
	print(usuario)