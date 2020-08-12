# Fórmulas NPT

## Edad:
Fecha de hoy - Fecha de nacimiento = edad en días

Según edad, expresar en días, meses, años-meses o años

## Peso:
si edad menor a 30 dias, introducir en gr, implica /1000 al calcular volumenes

## Superficie corporal
### con talla
raiz cuadrada(peso * talla/3600)

### sin talla
peso * 4 +7/90+peso

## Volumen programado:
volumen deseado * peso (+ excedente)

## Volumen a preparar
volumen programado + excedente (30-50 ml por definir)

## Volumen por SC
volumen programado / superficie corporal

## Velocidad de infusion
### sin ciclado
volumen programado / 24
### con ciclado
#### primera hora
volumen programado / (4 * (24-horas suspendida) - 10)
#### segunda hora
primera hora * 2
#### mantencion
primera hora * 4 por (24 - horas suspendida) horas
#### primera disminucion
segunda hora
#### segunda disminucion
primera hora
#### suspension
horas suspendida

## Glucosa 50%
carga glucosa * 1.44 * peso *2 

## Aminoacidos 10%
proteinas * peso * 10

## Lipidos SMOF Lipid 10%
lipidos * peso * 5

## cloruro de sodio 10%
### sin acetato
sodio * peso/1.75
### con acetato
(sodio - acetato)* peso /1.75

## cloruro de potasio 10%
### sin fosfato
potasio * peso /1.34
### con fosfato
(potasio - fosfato) * peso / 1.34

## magnesio sulfato 25%
magnesio * peso / 2

## zinc sulfato 0.88%
zinc * peso/1000/2

## calcio gluconato 10%
calcio * peso / 9

## bifosfato potasio 15%
fosfato * peso /1.1

## acetato sodio 30%
acetato * peso /2.2

## vitaminas hidrosolubles
1 * kg hasta 10 kg luego 10

## vitaminas liposolubles
2* kg hasta 2.5 luego 10 ¿? **revisar**

## oligoelementos
### peso <15 kg
4 Oligoelementos Tracelyte 
peso * 0.02
### peso >15 kg
9 Oligoelementos Addaven
peso * 0.02

## agua
volumen solutos - volumen programado
**debe ser mayor a cero**

## osmolaridad
cg * peso * 2.5 + aa10 / 0.885 + lip20 * 0.38 + nacl * 3.4 + kcl * 4.4 + mg *2.68 + zn * 1.7+ca * 0.697 + fosfk * 2.03 + vithidro * 0.3 + oligoelementos * 0.11

**si osmolaridad > 650 debe decir solo via central**

## Calorias/kg
### glucosa
cg * 1.44 * 3.4
### proteinas
proteinas * 4
### lipidos
lipidos * 11

cal no prot/gr N
cal kg lip * cal kg gluc / (cal kg prot/6.25)
** adecuado si menor a 200 **

## Compatibilidad Ca/P
(cagluc * 0.46 * 1000/ volumen a preparar) + (fosfato * peso * 1000 / volumen a preparar)

**si >= 30 no compatible**

## Límite estabilidad
### magnesio
0.55 * volumen a preparar / 100
### fosfato
2.7 * (volumen gluc50 + volumen aa10) / 100
### calcio
1.7 * (volumen a preparar - volumen lip20) / 100

## Calculo GER
### Schoffield
#### Niños
 - 0-3 años ((59,48 * peso)-30,33) ((0,167 * peso)+(1517,4 * talla/100)-617,6)
 - 3-10 años (22,7 * peso+505) ((19,6 * peso)+(130,3 * talla/100)+414,9)
 - 10-18 años (13,4 * peso+693) ((16,25 * peso)+(137,2 * talla/100)+515,5)
#### Niñas
 - 0-3 años (58,29 * peso-31,05)((16,25 * peso)+(1023 * talla/100)-413,5)
 - 3-10 años (20,3 * peso+486) ((16,97 * peso)+(161,8 * talla/100)+371,2)
 - 10-18 años (17,7 * peso+695) ((8,365 * peso)+(465 * talla/100)+200)
### OMS 
#### Niños
 - 0-3 años (60,9 * peso-54)
 - 3-10 años (22,7 * peso+495)
 - 10-18 años (17,5 * peso+651)
#### Niñas
 - 0-3 años (61 * peso-51)
 - 3-10 años (22,4 * peso+499)
 - 10-18 años (12,2 * peso+746)



