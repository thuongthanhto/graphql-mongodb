import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }
  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }
  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
  //   @Mutation(() => LessonType)
  //   assignStudentsToLesson(
  //     @Args('assignStudentsToLessonInput')
  //     assignStudentsToLessonInput: AssignStudentsToLessonInput,
  //   ) {
  //     const { lessonId, studentIds } = assignStudentsToLessonInput;
  //     return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  //   }
  //   @Mutation(() => LessonType)
  //   deleteLesson(@Args('id') id: string) {
  //     return this.lessonService.deleteLesson(id);
  //   }
}
