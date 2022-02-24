import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BioDatasService } from './bio-data.service';
import { CreateBioDataDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';

@Controller('bio-data')
export class BioDataController {
  constructor(private readonly bioDataService: BioDatasService) {}

  @Post()
  create(@Body() createBioDatumDto: CreateBioDataDto) {
    return this.bioDataService.create(createBioDatumDto);
  }

  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bioDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBioDatumDto: UpdateBioDatumDto) {
    return this.bioDataService.update(+id, updateBioDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bioDataService.remove(+id);
  }
}