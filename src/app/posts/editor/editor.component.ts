import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  createPostForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createPostForm = this.fb.group({
      title: [{ value: 1234, disabled: true }, Validators.required],
      content: ['', [Validators.required, Validators.minLength(10)]],
      tags: this.fb.array([
        this.fb.control('ANGULAR'),
        this.fb.control('HTML'),
        this.fb.control('CSS'),
      ])
    });
  }


  public get title(): AbstractControl {
    return this.createPostForm.get('title');
  }


  public get content(): AbstractControl {
    return this.createPostForm.get('content');
  }


  public get tags(): FormArray {
    return this.createPostForm.get('tags') as FormArray;
  }

  addTag(tag: string) {
    if (tag && (this.tags.value.indexOf(tag.toUpperCase()) == -1)) {
      this.tags.push(this.fb.control(tag.toUpperCase()));
    }
  }

  deleteTag(index: number) {
    this.tags.removeAt(index);
  }

  createPost() {
    console.log(this.createPostForm.value);
  }


}
