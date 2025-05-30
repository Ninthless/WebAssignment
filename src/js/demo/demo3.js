let courses = [
    {
        id: 'C001',
        name: 'JavaScript基础',
        instructor: '王老师',
        hours: 32,
        isActive: true,
        students: 45
    },
    {
        id: 'C002',
        name: '前端框架开发',
        instructor: '张老师',
        hours: 48,
        isActive: false,
        students: 28
    }
];

/*增加一门课程
{
    id: 'C003',
    name: 'JavaEE',
    instructor: '徐老师',
    hours: 48,
    isActive: false,
    students: 38
}
*/
let newCourse = {
    id: 'C003',
    name: 'JavaEE',
    instructor: '徐老师',
    hours: 48,
    isActive: false,
    students: 38
};

courses.push(newCourse);

/*删除id为C002的课程 */
for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === 'C002') {
        courses.splice(i, 1);
        break;
    }
}
/*修改id为C001的课程的老师为陈老师*/
for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === 'C001') {
        courses[i].instructor = '陈老师';
        break;
    }
}

console.log(courses);

