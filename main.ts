function Box1 () {
    Robot_Start()
    TracJC()
    Turn_Left()
    GripDown()
    TracJC_Speed()
    TracJC_Speed()
    Trac_Slow_100()
    Grip()
    GripUp()
    Backward100()
    Backward100()
    Backward100()
    UTurn()
    TracJC()
    Turn_Left()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Stop()
    Right60()
    Right60()
    GripDown()
    Put()
    GripUp()
    Left60()
    Left60()
}
function Turn_Right () {
    Motor_Stop()
    iBIT.Spin(ibitSpin.Right, Turn_Speed)
    ConvertADC()
    while (R3 == 0) {
        ConvertADC()
    }
    basic.pause(6000 / Turn_Speed)
    if (Turn_Speed >= 90) {
        iBIT.Spin(ibitSpin.Right, Turn_Speed - 30)
    }
    while (R3 == 1) {
        ConvertADC()
    }
    if (Base_Speed <= 90) {
        while (R2 == 1) {
            ConvertADC()
        }
    }
    if (Base_Speed <= 70) {
        while (C == 1) {
            ConvertADC()
        }
    }
    Motor_Stop()
}
function Forward_Slow_100 () {
    Motor_Stop()
    Base_Speed = Slow_Speed
    Initial_Speed()
    Forward()
    basic.pause(100)
    Base_Speed = Speed
    Initial_Speed()
}
function Forward () {
    iBIT.Motor2(ibitMotor.Forward, Base_Left_Speed, Base_Right_Speed)
}
function Backward_Slow_100 () {
    Motor_Stop()
    Base_Speed = Slow_Speed
    Initial_Speed()
    Backward()
    basic.pause(100)
    Base_Speed = Speed
    Initial_Speed()
}
function Servo_GripDown () {
    iBIT.Servo(ibitServo.SV2, 160)
}
function Backward100 () {
    Backward()
    basic.pause(100)
}
function Trac_ms () {
    Initial_Speed()
    Start = input.runningTime()
    Timer = 0
    while (Timer < Trac_Time) {
        Trac_PID()
        basic.pause(Kt)
        Timer = input.runningTime() - Start
        Cal_Error()
    }
}
function Left60 () {
    iBIT.MotorStop()
    iBIT.Spin(ibitSpin.Left, Slow_Speed)
    basic.pause(60)
}
function Trac_ms_Speed () {
    Base_Speed = ACC_Speed
    Trac_ms()
    Base_Speed = Speed
}
input.onButtonPressed(Button.A, function () {
    Box1()
    Box2()
    Box3()
    Box4()
    Box5()
    Box6()
    GoTo_Finish()
    Finish()
})
function UTurn () {
    Motor_Stop()
    iBIT.Spin(ibitSpin.Right, Turn_Speed)
    basic.pause(15000 / Turn_Speed)
    if (Turn_Speed >= 80) {
        iBIT.Spin(ibitSpin.Right, Turn_Speed - 20)
    }
    ConvertADC()
    while (R3 == 1) {
        ConvertADC()
    }
    if (Base_Speed <= 70) {
        while (R1 == 1) {
            ConvertADC()
        }
    }
    Motor_Stop()
}
function White_Area () {
    LineBlack = 0
}
function TracJC_Slow_Stop () {
    Base_Speed = Slow_Speed
    TracJC_Stop()
    Base_Speed = Speed
    Initial_Speed()
}
function Turn_Left () {
    Motor_Stop()
    iBIT.Spin(ibitSpin.Left, Turn_Speed)
    ConvertADC()
    while (L3 == 0) {
        ConvertADC()
    }
    basic.pause(6000 / Turn_Speed)
    if (Turn_Speed >= 90) {
        iBIT.Spin(ibitSpin.Left, Turn_Speed - 30)
    }
    while (L3 == 1) {
        ConvertADC()
    }
    if (Base_Speed <= 90) {
        while (L2 == 1) {
            ConvertADC()
        }
    }
    if (Base_Speed <= 70) {
        while (C == 1) {
            ConvertADC()
        }
    }
    Motor_Stop()
}
function Black_Area () {
    LineBlack = 1
}
function Finish () {
    iBIT.MotorStop()
    basic.showString("Finish")
    while (true) {
    	
    }
}
function Trac_ms_Slow () {
    Base_Speed = Slow_Speed
    Trac_ms()
    Base_Speed = Speed
}
function Put () {
    iBIT.MotorStop()
    iBIT.Servo(ibitServo.SV1, 130)
    basic.pause(100)
}
function Servo_GripUp () {
    iBIT.Servo(ibitServo.SV2, 35)
}
function Box6 () {
    UTurn()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC()
    Turn_Right()
    GripDown()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    Forward100()
    Black_Area()
    TracJC_Speed()
    Trac_Slow_100()
    Grip()
    GripUp()
    Backward100()
    Backward100()
    Backward100()
    UTurn()
    TracJC_Speed()
    White_Area()
    TracJC()
    basic.pause(30)
    Turn_Left()
    TracJC_Speed()
    TracJC_Speed()
    Forward100()
    TracJC_Speed()
    TracJC_Speed()
    Forward100()
    TracJC_Speed()
    Forward100()
    TracJC_Speed()
    TracJC()
    Turn_Right()
    GripDown()
    TracJC_Speed()
    TracJC_Slow_Stop()
    Put()
    Right60()
    Right60()
    GripUp()
}
function Box5 () {
    UTurn()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC()
    Turn_Right()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    Forward100()
    TracJC_Speed()
    TracJC_Speed()
    Forward100()
    TracJC()
    Turn_Left()
    GripDown()
    TracJC_Speed()
    TracJC_Speed()
    Black_Area()
    TracJC_Speed()
    Trac_Slow_100()
    Grip()
    GripUp()
    Backward100()
    Backward100()
    UTurn()
    TracJC_Speed()
    White_Area()
    TracJC_Speed()
    TracJC()
    Turn_Right()
    TracJC_Speed()
    Forward100()
    TracJC_Speed()
    TracJC_Speed()
    Forward100()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC()
    Turn_Left()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    GripDown()
    Put()
    TracJC_Slow_Stop()
    Right60()
    Right60()
    GripUp()
}
function Grip () {
    iBIT.MotorStop()
    iBIT.Servo(ibitServo.SV1, 60)
    basic.pause(200)
}
function GripDown () {
    iBIT.MotorStop()
    Servo_GripDown()
    basic.pause(200)
}
function Show7ADC () {
    Read7ADC()
    basic.showNumber(L3)
    basic.pause(1000)
    basic.showNumber(L2)
    basic.pause(1000)
    basic.showNumber(L1)
    basic.pause(1000)
    basic.showNumber(C)
    basic.pause(1000)
    basic.showNumber(R1)
    basic.pause(1000)
    basic.showNumber(R2)
    basic.pause(1000)
    basic.showNumber(R3)
}
function GoTo_Finish () {
    UTurn()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    Forward100()
}
function Box4 () {
    UTurn()
    TracJC_Speed()
    TracJC_Speed()
    TracJC()
    Turn_Left()
    GripDown()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    Forward_Slow_100()
    Forward_Slow_100()
    Grip()
    GripUp()
    Backward100()
    Turn_Left()
    TracJC_Speed()
    Forward100()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC()
    Turn_Left()
    TracJC_Speed()
    GripDown()
    Put()
    TracJC_Slow_Stop()
    Right60()
    Right60()
    GripUp()
}
function TracJC () {
    TracJC_Stop()
    Forward()
    if (Base_Speed <= 60) {
        basic.pause(4000 / Base_Speed)
    } else if (Base_Speed <= 70) {
        basic.pause(3000 / Base_Speed)
    } else if (Base_Speed <= 80) {
        basic.pause(1500 / Base_Speed)
    } else if (Base_Speed <= 90) {
        basic.pause(1000 / Base_Speed)
    } else {
        basic.pause(100 / Base_Speed)
    }
}
function GripUp () {
    iBIT.MotorStop()
    Servo_GripUp()
    basic.pause(200)
}
function TracJC_Slow () {
    Base_Speed = Slow_Speed
    TracJC_Stop()
    Forward()
    basic.pause(200)
    Base_Speed = Speed
    Initial_Speed()
}
function Trac_PID () {
    if (Math.abs(error) <= 2) {
        KpTemp = 1
    } else {
        KpTemp = Kp
    }
    Output = KpTemp * error + (Ki * Sum_error + Kd * (error - Pre_error))
    Left_Speed = Base_Left_Speed + Output
    Right_Speed = Base_Right_Speed - Output
    if (Left_Speed > Max_Speed) {
        Left_Speed = Max_Speed
    }
    if (Left_Speed < 0) {
        Left_Speed = 0
    }
    if (Right_Speed > Max_Speed) {
        Right_Speed = Max_Speed
    }
    if (Right_Speed < 0) {
        Right_Speed = 0
    }
    iBIT.Motor2(ibitMotor.Forward, Left_Speed, Right_Speed)
    Pre_error = error
    Sum_error += error
}
function ConvertADC () {
    Read7ADC()
    if (LineBlack == 0) {
        if (L3 < Ref_L3) {
            L3 = 0
        } else {
            L3 = 1
        }
        if (L2 < Ref_L2) {
            L2 = 0
        } else {
            L2 = 1
        }
        if (L1 < Ref_L1) {
            L1 = 0
        } else {
            L1 = 1
        }
        if (C < Ref_C) {
            C = 0
        } else {
            C = 1
        }
        if (R1 < Ref_R1) {
            R1 = 0
        } else {
            R1 = 1
        }
        if (R2 < Ref_R2) {
            R2 = 0
        } else {
            R2 = 1
        }
        if (R3 < Ref_R3) {
            R3 = 0
        } else {
            R3 = 1
        }
    } else {
        if (L3 > Ref_L3) {
            L3 = 0
        } else {
            L3 = 1
        }
        if (L2 > Ref_L2) {
            L2 = 0
        } else {
            L2 = 1
        }
        if (L1 > Ref_L1) {
            L1 = 0
        } else {
            L1 = 1
        }
        if (C > Ref_C) {
            C = 0
        } else {
            C = 1
        }
        if (R1 > Ref_R1) {
            R1 = 0
        } else {
            R1 = 1
        }
        if (R2 > Ref_R2) {
            R2 = 0
        } else {
            R2 = 1
        }
        if (R3 > Ref_R3) {
            R3 = 0
        } else {
            R3 = 1
        }
    }
}
input.onButtonPressed(Button.B, function () {
    Show7ADC()
})
function Robot_Start () {
    Base_Speed = 60
    Initial_Speed()
    Forward()
    basic.pause(300)
    Base_Speed = Speed
    Initial_Speed()
}
function Forward100 () {
    Forward()
    basic.pause(100)
}
function Trac_Slow_100 () {
    Trac_Time = 100
    Trac_ms_Slow()
}
function Box3 () {
    UTurn()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC()
    Turn_Left()
    GripDown()
    TracJC_Speed()
    Trac_Slow_100()
    Grip()
    GripUp()
    Backward100()
    Backward100()
    Turn_Left()
    TracJC_Speed()
    Turn_Right()
    GripDown()
    TracJC_Speed()
    Right60()
    Right60()
    Right60()
    GripDown()
    Put()
    GripUp()
}
function TracJC_Speed () {
    Base_Speed = ACC_Speed
    TracJC_Stop()
    Forward()
    basic.pause(6000 / ACC_Speed)
    Base_Speed = Speed
    Initial_Speed()
}
function Cal_Error () {
    ConvertADC()
    if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 1 && (R1 == 1 && (R2 == 1 && R3 == 0)))))) {
        error = 6
    } else if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 1 && (R1 == 1 && (R2 == 0 && R3 == 0)))))) {
        error = 5
    } else if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 1 && (R1 == 1 && (R2 == 0 && R3 == 1)))))) {
        error = 4
    } else if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 1 && (R1 == 0 && (R2 == 0 && R3 == 1)))))) {
        error = 3
    } else if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 1 && (R1 == 0 && (R2 == 1 && R3 == 1)))))) {
        error = 2
    } else if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 0 && (R1 == 0 && (R2 == 1 && R3 == 1)))))) {
        error = 1
    } else if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 0 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
        error = 0
    } else if (L3 == 1 && (L2 == 1 && (L1 == 0 && (C == 0 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
        error = -1
    } else if (L3 == 1 && (L2 == 1 && (L1 == 0 && (C == 1 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
        error = -2
    } else if (L3 == 1 && (L2 == 0 && (L1 == 0 && (C == 1 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
        error = -3
    } else if (L3 == 1 && (L2 == 0 && (L1 == 1 && (C == 1 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
        error = -4
    } else if (L3 == 0 && (L2 == 0 && (L1 == 1 && (C == 1 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
        error = -5
    } else if (L3 == 0 && (L2 == 1 && (L1 == 1 && (C == 1 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
        error = -6
    } else if (L3 == 1 && (L2 == 1 && (L1 == 1 && (C == 1 && (R1 == 1 && (R2 == 1 && R3 == 1)))))) {
    	
    } else if (L3 == 0 && (L2 == 0 && (L1 == 0 && (C == 0 && (R1 == 0 && (R2 == 0 && R3 == 0)))))) {
        error = 100
    } else if (L3 == 0 && (L2 == 0 && L1 == 0)) {
        error = 101
    } else if (R1 == 0 && (R2 == 0 && R3 == 0)) {
        error = 102
    }
}
function TracJC_Stop () {
    Initial_Speed()
    while (error < 99) {
        Trac_PID()
        Start = input.runningTime()
        Timer = 0
        while (Timer < Kt && error < 99) {
            Timer = input.runningTime() - Start
            Cal_Error()
        }
    }
}
function Right60 () {
    iBIT.MotorStop()
    iBIT.Spin(ibitSpin.Right, Slow_Speed)
    basic.pause(60)
}
function Box2 () {
    Turn_Left()
    TracJC_Speed()
    TracJC()
    basic.pause(30)
    Turn_Left()
    TracJC_Speed()
    TracJC_Speed()
    TracJC()
    Turn_Left()
    GripDown()
    Trac_Slow_100()
    Trac_Slow_100()
    Trac_Slow_100()
    Grip()
    GripUp()
    Backward100()
    Backward100()
    Backward100()
    Turn_Left()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    TracJC_Speed()
    GripDown()
    Put()
    TracJC_Slow_Stop()
    Right60()
    Right60()
    GripUp()
}
function Initial_Speed () {
    Max_Speed = Base_Speed
    Ki = 0
    error = 0
    Pre_error = 0
    Sum_error = 0
    if (Base_Speed <= 50) {
        Base_Left_Speed = Base_Speed - 0
        Base_Right_Speed = Base_Speed - 0
        Kp = 8
        Kd = 25
        Kt = 10
    } else if (Base_Speed <= 60) {
        Base_Left_Speed = Base_Speed - 3
        Base_Right_Speed = Base_Speed - 0
        Kp = 9
        Kd = 30
        Kt = 10
    } else if (Base_Speed <= 70) {
        Base_Left_Speed = Base_Speed - 4
        Base_Right_Speed = Base_Speed - 0
        Kp = 10
        Kd = 35
        Kt = 10
    } else if (Base_Speed <= 80) {
        Base_Left_Speed = Base_Speed - 6
        Base_Right_Speed = Base_Speed - 0
        Kp = 11
        Kd = 35
        Kt = 10
    } else if (Base_Speed <= 90) {
        Base_Left_Speed = Base_Speed - 8
        Base_Right_Speed = Base_Speed - 0
        Kp = 12
        Kd = 35
        Kt = 10
    } else {
        Base_Left_Speed = Base_Speed - 10
        Base_Right_Speed = Base_Speed - 0
        Kp = 20
        Kd = 70
        Kt = 10
    }
}
function Read7ADC () {
    L3 = iBIT.ReadADC(ibitReadADC.ADC0)
    L2 = iBIT.ReadADC(ibitReadADC.ADC1)
    L1 = iBIT.ReadADC(ibitReadADC.ADC2)
    C = iBIT.ReadADC(ibitReadADC.ADC3)
    R1 = iBIT.ReadADC(ibitReadADC.ADC4)
    R2 = iBIT.ReadADC(ibitReadADC.ADC5)
    R3 = iBIT.ReadADC(ibitReadADC.ADC6)
}
function Backward () {
    iBIT.Motor2(ibitMotor.Backward, Base_Right_Speed, Base_Left_Speed)
}
function Motor_Stop () {
    iBIT.MotorStop()
    basic.pause(30)
}
let Max_Speed = 0
let Right_Speed = 0
let Left_Speed = 0
let Pre_error = 0
let Kd = 0
let Sum_error = 0
let Ki = 0
let Output = 0
let Kp = 0
let KpTemp = 0
let error = 0
let L1 = 0
let L2 = 0
let L3 = 0
let R1 = 0
let Kt = 0
let Trac_Time = 0
let Timer = 0
let Start = 0
let Base_Right_Speed = 0
let Base_Left_Speed = 0
let C = 0
let R2 = 0
let R3 = 0
let Ref_R3 = 0
let Ref_R2 = 0
let Ref_R1 = 0
let Ref_C = 0
let Ref_L1 = 0
let Ref_L2 = 0
let Ref_L3 = 0
let LineBlack = 0
let Turn_Speed = 0
let Base_Speed = 0
let Slow_Speed = 0
let ACC_Speed = 0
let Speed = 0
Speed = 100
ACC_Speed = 100
Slow_Speed = 50
Base_Speed = Speed
Turn_Speed = Base_Speed
LineBlack = 0
Initial_Speed()
Ref_L3 = 2300
Ref_L2 = 2900
Ref_L1 = 3000
Ref_C = 2900
Ref_R1 = 2700
Ref_R2 = 3100
Ref_R3 = 2900
GripDown()
Grip()
basic.showIcon(IconNames.Heart)
GripUp()
Put()
