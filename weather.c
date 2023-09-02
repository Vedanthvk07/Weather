#include <GL/glut.h>
#include <stdlib.h>

#define MAX_SNOWFLAKES 1000

typedef struct {
    float x;
    float y;
    float speed;
    float radius;
} Snowflake;

Snowflake snowflakes[MAX_SNOWFLAKES];

void init() {
    glClearColor(0.0, 0.0, 0.0, 0.0);
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(0.0, 800.0, 0.0, 600.0);

    for (int i = 0; i < MAX_SNOWFLAKES; i++) {
        snowflakes[i].x = rand() % 800;
        snowflakes[i].y = rand() % 600;
        snowflakes[i].speed = 1.0 + ((rand() % 5) / 10.0);
        snowflakes[i].radius = 1.0 + ((rand() % 10) / 10.0);
    }
}

void drawSnow() {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(1.0, 1.0, 1.0);

    for (int i = 0; i < MAX_SNOWFLAKES; i++) {
        glPushMatrix();
        glTranslatef(snowflakes[i].x, snowflakes[i].y, 0.0);
        glBegin(GL_POLYGON);
        for (int j = 0; j < 360; j += 45) {
            float angle = j * 3.14159 / 180.0;
            float x = snowflakes[i].radius * cos(angle);
            float y = snowflakes[i].radius * sin(angle);
            glVertex2f(x, y);
        }
        glEnd();
        glPopMatrix();

        snowflakes[i].y -= snowflakes[i].speed;

        if (snowflakes[i].y < 0.0) {
            snowflakes[i].x = rand() % 800;
            snowflakes[i].y = 600.0;
        }
    }

    glFlush();
    glutSwapBuffers();
}

void idle() {
    glutPostRedisplay();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
    glutInitWindowSize(800, 600);
    glutCreateWindow("Snowfall");

    init();
    glutDisplayFunc(drawSnow);
    glutIdleFunc(idle);

    glutMainLoop();
    return 0;
}
