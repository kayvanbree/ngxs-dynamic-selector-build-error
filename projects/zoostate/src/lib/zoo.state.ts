import {State, Selector, createSelector} from '@ngxs/store';
​
// @dynamic
@State<string[]>({
  name: 'animals',
  defaults: [
    'panda',
    'horse',
    'bee'
  ]
})
export class ZooState {
​
  @Selector()
  static pandas(state: string[]) {
    return state.filter(s => s.indexOf('panda') > -1);
  }

  @Selector()
  static horses(state: string[]) {
    return (type: string) => {
      return state.filter(s => s.indexOf('horse') > -1)
        .filter(s => s.indexOf(type) > -1);
    };
  }

  static bees(type: string) {
    return createSelector([ZooState], (state: string[]) => {
      return state.filter(s => s.indexOf('bee') > -1)
        .filter(s => s.indexOf(type) > -1);
    });
  }
}
