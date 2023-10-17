<script lang="ts">
	import { Presentation, Slide, Code, Markdown } from '@components'
	import { Title } from '@ui'
</script>

<Presentation>
	<Slide animate>
		<Title>
			<span class="text-6xl">2 Kesalahan pemula saat menggunakan Laravel Eloquent</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-6xl">2 Kesalahan pemula saat menggunakan Laravel Eloquent</span>
		</Title>
		<div class="py-12">
			<img src="/noob.webp" alt="JWT" class="mx-auto rounded-md" width="400" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-6xl">Kesalahan pertama</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-6xl text-gray-400">Kesalahan pertama</span>
		</Title>
		<p>Tidak menggunakan query debugger</p>
	</Slide>
	
	<Slide animate>
		<Title>
			<span class="text-6xl text-gray-500">Kesalahan pertama</span>
		</Title>
		<p class="text-gray-400">Tidak menggunakan query debugger</p>
		<p class="py-8 text-7xl">🤯 Query goib.</p>
	</Slide>
	
	<Slide animate>
		<p class="py-8 text-[200px]">🧑‍🦯</p>
	</Slide>
	
	<Slide animate>
		<Title>
			<span class="text-7xl">Solusi</span>
		</Title>
		<p class="pt-8 text-5xl">Laravel Debugbar</p>
		<div class="py-8">
			<img width="1200" src="/laravel-mistake/mistake-1.png" alt="query debugger" class="mx-auto rounded-md ring-4" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl text-gray-500">Solusi</span>
		</Title>
		<p>🐝 Install package laravel debugbar</p>
		<div class="my-8 border rounded-md p-4 grid gap-4 bg-gray-900">
			<div class="flex gap-2">
				<div class="w-4 h-4 rounded-full bg-rose-400"></div>
				<div class="w-4 h-4 rounded-full bg-orange-400"></div>
				<div class="w-4 h-4 rounded-full bg-green-400"></div>
			</div>
			<div class="font-mono py-4 text-lg text-orange-300 text-start space-y-2">
				<p>composer require barryvdh/laravel-debugbar --dev</p>
				<p>php artisan vendor:publish --provider="Barryvdh\Debugbar\ServiceProvider"</p>
			</div>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Kesalahan kedua</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl text-gray-500">Kesalahan kedua</span>
		</Title>
		<p>🐌 Tidak menggunakan Eager Loading</p>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl text-gray-600">
				Kesalahan kedua
			</span>
		</Title>
		<p class="text-gray-500">🐌 Tidak menggunakan Eager Loading</p>
		<p class="py-8 text-6xl font-bold">📈 N+1 Query Problem.</p>
	</Slide>

	<Slide animate>
		<Title>
			🔍 Contoh
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			🔍 Contoh
		</Title>
		<p class="pb-8 text-2xl">Misalnya kita punya model course!</p>
	</Slide>
	
	<Slide animate>
		<Title>
			🔍 Contoh
		</Title>
		<p class="pb-8 text-2xl">Misalnya kita punya model course!</p>

		<div class="mx-auto w-[800px]">
			<Code lang="php">
			  {`
class Course extends Model {
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }
}
`}
			</Code>
		  </div>
	</Slide>

	<Slide animate>
		<Title>
			🔍 Contoh
		</Title>
		<p class="pb-8 text-2xl">CourseController</p>

		<div class="mx-auto w-[800px]">
			<Code lang="php">
			  {`
class CourseController extends Controller {
    public function index()
    {
        return view('courses.index', [
					'courses' => Course::all()
				]);
    }
}
`}
			</Code>
		  </div>
	</Slide>

	<Slide animate>
		<Title>
			🔍 Contoh
		</Title>
		<p class="pb-8 text-2xl">Blade components</p>

	<div class="">
		<Code lang="php">
		  {`
@foreach($courses as $item)
<div>
	<img src="{{$item->thumbnail}}" alt="..." />
	<div>
		<div>{{$item->title}}</div>
		<div>{{$item->category->name}}</div>
		<div>{{$item->chapters->count()}} Chapters</div>
		<div>
			{{ $item->price == 0 ? 'Free': '$ ' . $item->price }}
		</div>
	</div>
</div>
@endforeach
`}
		</Code>
	  </div>
	</Slide>

	<Slide animate>
		<Title>
			🍔 Sample data
		</Title>
		<div class="py-8">
			<table class="border-collapse border border-slate-400 table-auto">
				<thead>
				  <tr>
					<th></th>
					<th class="border border-slate-300">Name</th>
					<th>Rows</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>1</td>
					<td class="border border-slate-300">Category</td>
					<td>6</td>
				  </tr>
				  <tr>
					<td>2</td>
					<td class="border border-slate-300">Chapters</td>
					<td>6</td>
				  </tr>
				  <tr>
					<td>3</td>
					<td class="border border-slate-300">Courses</td>
					<td>3</td>
				  </tr>
				</tbody>
			  </table>
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Query dan Models</span>
		</Title>
		<div class="py-6">
			<img src="/laravel-mistake/mistake-1.png" alt="mistake-1" class="rounded-md ring-4 ring-sky-400" />
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Query dan Models</span>
		</Title>
		<div class="py-6">
			<img src="/laravel-mistake/mistake-2.png" alt="mistake-1" class="rounded-md ring-4 ring-sky-400" />
		</div>
	</Slide>
	<Slide animate>
		<Title>
			🍔 Sample data
		</Title>
		<div class="py-8">
			<table class="border-collapse border border-slate-400 table-auto">
				<thead>
				  <tr>
					<th></th>
					<th class="border border-slate-300">Name</th>
					<th>Rows</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>1</td>
					<td class="border border-slate-300">Category</td>
					<td>6</td>
				  </tr>
				  <tr>
					<td>2</td>
					<td class="border border-slate-300">Chapters</td>
					<td>6</td>
				  </tr>
				  <tr>
					<td>3</td>
					<td class="border border-slate-300">Courses</td>
					<td>9</td>
				  </tr>
				</tbody>
			  </table>
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Query dan Models</span>
		</Title>
		<div class="py-6">
			<img src="/laravel-mistake/mistake-3.png" alt="mistake-3" class="rounded-md ring-4 ring-sky-400" />
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Query dan Models</span>
		</Title>
		<div class="py-6">
			<img src="/laravel-mistake/mistake-4.png" alt="mistake-4" class="rounded-md ring-4 ring-sky-400" />
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">💣</span>
		</Title>
		<Title>
			<span class="text-7xl">N+1 Problem</span>
		</Title>
	</Slide>
	<Slide animate>
			<img width="600" src="/explode.webp" alt="explode" class="rounded-md ring-4 ring-sky-900 mx-auto" />
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Jadi gimana dong?</span>
		</Title>
		<div class="py-6">
			<img src="/charlie.gif" alt="mistake-1" class="rounded-md ring-8 ring-sky-400 mx-auto" />
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Jadi gimana dong?</span>
		</Title>
		<div class="py-6 font-bold underline text-7xl text-rose-400">
			Laravel Eager Loading
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl text-sky-400 underline">Apa itu Laravel Eager Loading?</span>
		</Title>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Lazy Loading</span>
		</Title>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Lazy Loading</span>
		</Title>
		<p class="pb-8">Course model</p>
		<div class="mx-auto w-[800px] border rounded-md overflow-hidden p-2">
			<Code lang="php">
			  {`
class Course extends Model {

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function chapters() {
        return $this->hasMany(Chapter::class);
    }
}
`}
			</Code>
		  </div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-7xl">Lazy Loading</span>
		</Title>
		<div class="mx-auto w-[800px] border rounded-md overflow-hidden p-2">
			<Code lang="php" lines="4,5,6">
				{`
class CourseController extends Controller {
	  public function index()
	  {
			$courses = Course::all();
			$course[0]->category->name;
			$course[0]->chapters->count();
			return view('courses.index', [
				'courses' => $courses
			]);
	  }
}
  `}
			  </Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Lazy Loading</span>
		</Title>
		<div class="py-8"></div>
		<div class="absolute w-[450px]">
		<Code lang="php" offset="6" lines="1">
			{`
			$courses = Course::all();
			$course[0]->category->name;
			$course[0]->chapters->count();
			`}
		</Code>
		</div>

		<div data-id="circle" class="absolute right-[-14%] w-[620px]">
			<Code lang="sql" lines="1">
				{`
				select * from courses;
				select * from categories 
					where categories.id = 1 limit 1;
				select * from chapters 
					where chapters.course_id = 1 
					and chapters.course_id is not null;
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
	  <Title>
		  <span class="text-7xl">Lazy Loading</span>
	  </Title>
	  <div class="py-8"></div>
	  <div class="absolute w-[450px]">
	  <Code lang="php" offset="6" lines="2">
		  {`
		  $courses = Course::all();
		  $course[0]->category->name;
		  $course[0]->chapters->count();
		  `}
	  </Code>
	  </div>

	  <div data-id="circle" class="absolute right-[-14%] w-[620px]">
		  <Code lang="sql" lines="2,3">
			  {`
			  select * from courses;
			  select * from categories 
				  where categories.id = 1 limit 1;
			  select * from chapters 
				  where chapters.course_id = 1 
				  and chapters.course_id is not null;
			  `}
		  </Code>
	  </div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Lazy Loading</span>
		</Title>
		<div class="py-8"></div>
		<div class="absolute w-[450px]">
		<Code lang="php" offset="6" lines="3">
			{`
			$courses = Course::all();
			$course[0]->category->name;
			$course[0]->chapters->count();
			`}
		</Code>
		</div>

		<div data-id="circle" class="absolute right-[-14%] w-[620px]">
			<Code lang="sql" lines="4,5,6">
				{`
				select * from courses;
				select * from categories 
					where categories.id = 1 limit 1;
				select * from chapters 
					where chapters.course_id = 1 
					and chapters.course_id is not null;
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Eager Loading</span>
		</Title>
		<div class="py-8"></div>
		<div class="absolute w-[350px] text-3xl">
		<Code lang="php" offset="6">
			{`
			$courses = Course::with([
				'category',
				'chapters'
			])->get()
			$course[0]->category->name;
			$course[0]->chapters->count();
			`}
		</Code>
		</div>

		<div data-id="circle" class="absolute right-[-14%] w-[720px] text-3xl">
			<Code lang="sql" lines="4,5,6">
				{`
				select * from courses;
				select * from categories where categories.id in (1);
				select * from chapters where chapters.course_id in (1, 2, 3);
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Hasilnya</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-4xl text-gray-500">Hasilnya</span>
		</Title>
		<div class="py-8">
			<p class="pb-8">Lazy Load</p>
			<img src="/laravel-mistake/mistake-1.png" alt="mistake-1" class="rounded-md ring-4 ring-sky-400 mx-auto" />
		</div>
	</Slide>
	<Slide animate>
		<Title>
			<span class="text-4xl text-gray-500">Hasilnya</span>
		</Title>
		<div class="py-8">
			<p class="pb-8">Eager Load</p>
			<img src="/laravel-mistake/mistake-5.png" alt="mistake-5" class="rounded-md ring-4 ring-sky-400 mx-auto" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Sampai saat ini kita harus berterimakasih kepada...</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-4xl text-gray-400">Sampai saat ini kita harus berterimakasih kepada...</span>
		</Title>
		<div class="py-8">
			<img src="/laravel-logo-red.svg" alt="Laravel" class="rounded-md ring-4 ring-slate-400 mx-auto" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Wait...🫷</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Can we do better? 🤔</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-5xl text-gray-500">Can we do better? 🤔</span>
		</Title>
		<div class="py-8">
			<p class="pb-16">Kurangi penggunaan query?</p>
			<img src="/laravel-mistake/mistake-5.png" alt="mistake-5" class="rounded-md ring-4 ring-sky-400 mx-auto" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Of Course! 🚀</span>
		</Title>
	</Slide>

	<Slide animate>
		<Title>
			Blade components
		</Title>
	<div class="py-8">
		<Code lang="php" lines="6,7">
		  {`
@foreach($courses as $item)
<div>
	<img src="{{$item->thumbnail}}" alt="..." />
	<div>
		<div>{{$item->title}}</div>
		<div>{{$item->category->name}}</div>
		<div>{{$item->chapters->count()}} Chapters</div>
		<div>
			{{ $item->price == 0 ? 'Free': '$ ' . $item->price }}
		</div>
	</div>
</div>
@endforeach
`}
		</Code>
	  </div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">withCount</span>
		</Title>
		<div class="py-8"></div>
		<div class="absolute w-[450px]">
		<Code lang="php" offset="6" lines="2,4">
			{`
			$courses = Course::with([
				'category'
			])
			->withCount('chapters')
			->get()
			`}
		</Code>
		</div>

		<div data-id="circle" class="absolute right-[-14%] w-[620px]">
			<Code lang="sql" lines="2,3,5">
				{`
				select courses.*, (
					select count(*) 
					from chapters where courses.id = chapters.course_id
				) as chapters_count from courses;
				select * from categories where categories.id in (1);
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">withCount</span>
		</Title>
		<div class="py-8">
			<Code lang="php" lines="7">
				{`
	  @foreach($courses as $item)
	  <div>
		  <img src="{{$item->thumbnail}}" alt="..." />
		  <div>
			  <div>{{$item->title}}</div>
			  <div>{{$item->category->name}}</div>
			  <div>{{$item->chapters_count}} Chapters</div>
			  <div>
				  {{ $item->price == 0 ? 'Free': '$ ' . $item->price }}
			  </div>
		  </div>
	  </div>
	  @endforeach
	  `}
			  </Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-4xl text-gray-400">withCount</span>
		</Title>
		<div class="py-8">
			<img src="/laravel-mistake/mistake-6.png" alt="mistake-6" class="rounded-md ring-4 ring-slate-400 mx-auto" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-4xl text-gray-500">withCount</span>
		</Title>
		<div class="py-8">
			<img src="/laravel-mistake/mistake-5.png" alt="mistake-5" class="rounded-md ring-4 ring-slate-400 mx-auto" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-5xl text-gray-500">withCount</span>
		</Title>
		<div class="py-8">
			<Code lang="php" lines="6">
				{`
	  @foreach($courses as $item)
	  <div>
		  <img src="{{$item->thumbnail}}" alt="..." />
		  <div>
			  <div>{{$item->title}}</div>
			  <div>{{$item->category->name}}</div>
			  <div>{{$item->chapters_count}} Chapters</div>
			  <div>
				  {{ $item->price == 0 ? 'Free': '$ ' . $item->price }}
			  </div>
		  </div>
	  </div>
	  @endforeach
	  `}
			  </Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-6xl">withCount & join</span>
		</Title>
		<div class="border rounded-md text-4xl p-2">
		<Code lang="php" offset="6" lines="2,3,4">
			{`
		$courses = Course::query()
			->select('courses.*', 'categories.name as category_name')
			->withCount('chapters')
			->join('categories', 'categories.id', '=', 'courses.category_id')
			->get()
			`}
		</Code>
		</div>

		<div class="border rounded-md my-8 p-2 text-4xl">
			<Code lang="sql">
				{`
				select courses.*, categories.name as category_name, 
					(
						select count(*) from chapters 
						where courses.id = chapters.course_id
					) as chapters_count 
				from courses 
				inner join categories on categories.id = courses.category_id`
				}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-5xl text-gray-500">withCount & join</span>
		</Title>
		<div class="py-8">
			<Code lang="php" lines="6">
				{`
	  @foreach($courses as $item)
	  <div>
		  <img src="{{$item->thumbnail}}" alt="..." />
		  <div>
			  <div>{{$item->title}}</div>
			  <div>{{$item->category_name}}</div>
			  <div>{{$item->chapters_count}} Chapters</div>
			  <div>
				  {{ $item->price == 0 ? 'Free': '$ ' . $item->price }}
			  </div>
		  </div>
	  </div>
	  @endforeach
	  `}
			  </Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-4xl text-gray-500">withCount & join</span>
		</Title>
		<div class="py-8">
			<img src="/laravel-mistake/mistake-7.png" alt="mistake-7" class="rounded-md ring-4 ring-slate-400 mx-auto" />
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-5xl">Optimize more avoid full table scan</span>
		</Title>
		<div class="border rounded-md text-4xl p-2">
			<Code lang="php" offset="6">
				{`
			Course::select('courses.*', 'categories.name as category_name')
				->leftJoin('chapters', 'courses.id', '=', 'chapters.course_id')
				->selectRaw('COUNT(chapters.course_id) as chapters_count')
				->join('categories', 'categories.id', '=', 'courses.category_id')
				->groupBy('courses.id')
				->get()
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<Title>
			<span class="text-7xl">Dan seterusnya!!!</span>
		</Title>
	</Slide>

</Presentation>
