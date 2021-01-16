class Car:
    def __init__(self, max_speed, speed_units):
        self.max_speed = max_speed
        self.speed_units = speed_units

    def __repr__(self):
        return f"Car with the maximum speed of {self.max_speed} {self.speed_units}"


class Boat:
    def __init__(self, max_speed):
        self.max_speed = max_speed

    def __repr__(self):
        return f"Boat with the maximum speed of {self.max_speed} knots"


car = Car(200, "mph")
print(car)

car2 = Car(100, "km/h")
print(car2)
